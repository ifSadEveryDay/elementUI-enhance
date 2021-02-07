<!--
 * @Author: your name
 * @Date: 2021-01-30 16:49:31
 * @LastEditTime : 2021-02-03 17:33:47
 * @LastEditors  : 罗德远
 * @Description: In User Settings Edit
 * @FilePath     : \src\components\compUpload\index.vue
-->
<template>
  <div class="comp-upload">
    <el-upload
      :auto-upload="autoUpload"
      ref="comUpload"
      class="upload"
      :action="action"
      :type="type"
      :accept="accept"
      :on-success="onSuccuess"
      :on-change="onChange"
      :before-upload="beforeUpload"
      :list-type="listType"
      :Tipstyle="Tipstyle"
      :limit="limit"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template slot="default" v-if="type === 'thumbnail'">
        <i class="el-icon-plus"></i>
      </template>
      <template slot="file" slot-scope="{ file }" v-if="type === 'thumbnail'">
        <div class="indexImgStyle">
          <el-image
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt=""
            :fit="'fill'"
          ></el-image>
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="previewImg(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <!-- 替换文件 -->
            <span>
              <i
                slot="trigger"
                @click="find(file, $event)"
                class="el-icon-upload2"
              ></i>
            </span>
            <span class="el-upload-list__item-delete">
              <i class="el-icon-download"></i>
            </span>
            <span class="el-upload-list__item-delete">
              <i class="el-icon-delete"></i>
            </span>
          </span>
          <span class="descName">
            {{ file.name }}
          </span>
        </div>
      </template>

      <template v-if="type === 'primary' || !type">
        <el-button size="small" type="primary">点击上传</el-button>
      </template>
      <template v-if="type === 'imageUrl'">
        <img v-if="imageUrl" :src="imageUrl" class="imageUrl" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </template>
      <slot name="tipMessage" :style="Tipstyle">
        <div slot="tip" class="el-upload__tip" :style="Tipstyle">
          {{ tipText }}
        </div>
      </slot>
    </el-upload>
    <com-dialog
      :title="'文件详情'"
      :dialogVisible.sync="dialogVisible"
      center
      width="30%"
      @submit="onChangeName"
    >
      <template #body="{ formData }">
        <com-form :form="form" :formOptions="formOptions">
          <template #imgType="{ form, itemData, rules }">
            <!-- <el-image
              style="width: 100px; height: 100px"
              :src="form.url"
              :preview-src-list="[form.url]"
            >
            </el-image> -->
            <div class="CropperClass">
              <vueCropper
                id="corpper"
                ref="cropper"
                :img="form.url"
                autoCrop
                @realTime="realTime"
              ></vueCropper>
              <div
                class="show-preview viewImg"
                :style="{
                  width: previews.w + 'px',
                  height: previews.h + 'px',
                  overflow: 'hidden',
                  margin: '5px',
                }"
              >
                <div :style="previews.div">
                  <img :src="previews.url" :style="previews.img" />
                </div>
              </div>
            </div>
          </template>
        </com-form>
      </template>
    </com-dialog>
    <template v-if="currentUploadShow">
      <image-viewer
        :z-index="2000"
        :initial-index="imageIndex"
        :on-close="onClose"
        :url-list="previewSrcList"
      />
    </template>
  </div>
</template>
/* *
* 新增功能
* 修复二次上传文件需要刷新
* 加强上传文件类型大小验证
* 替换文件
* 上传前修改文件名字
* 显示文件名
* 图片适应度
* 预览操作度提升
* 图片裁剪
* * /
<script>
import comForm from '../compForm';
import comDialog from '../compDialog';
import ImageViewer from 'element-ui/packages/image/src/image-viewer';
import { VueCropper } from 'vue-cropper';
export default {
  name: 'compUpload',
  components: {
    comForm,
    comDialog,
    ImageViewer,
    VueCropper
  },
  props: {
    type: {
      type: String,
      default: () => 'primary'
    },
    Tipstyle: {
      type: Object,
      default: () => { }
    },
    limit: {
      type: Number,
      default: () => 4
    },
    tipText: {
      type: String,
      default: () => '只能上传jpg/png文件，且不超过1M'
    },
    accept: {
      type: String,
      default: () => '.jpg,.png'
    },
    action: {
      type: String,
      default: () => '#'
    },
    limitSize: {
      type: Number,
      default: 1
    },
    autoUpload: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      previews: {},
      previewSrcList: [],
      currentUploadShow: false,
      currentUploadImg: '',
      dialogVisible: false,
      repalceIndex: -1,
      currentUploadIndex: -1,
      form: {
        name: '',
        size: '',
        uploadStatus: '预备上传',
        url: ''
      },
      formOptions: [
        [
          {
            field: 'name',
            type: 'input',
            label: '图片名称'
          }
        ],
        [
          {
            field: 'size',
            type: 'input',
            label: '图片大小',
            isDisabled: true
          }
        ],
        [
          {
            field: 'uploadStatus',
            type: 'input',
            label: '文件状态',
            isDisabled: true
          }
        ],
        [
          {
            field: 'url',
            type: 'custom',
            customType: 'imgType',
            label: '文件详情'
          }
        ]

      ]
    };
  },
  computed: {
    listType() {
      if (this.type === 'thumbnail') {
        return 'picture-card';
      }
      return 'text';
    },
    imageIndex() {
      let previewIndex = 0;
      const srcIndex = this.previewSrcList.indexOf(this.currentUploadImg);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    }
  },
  methods: {
    realTime(data) {
      this.previews = data;
    },
    onClose() {
      this.currentUploadShow = false;
    },
    find(data, e) {
      this.repalceIndex = this.$refs.comUpload.uploadFiles.findIndex(name => {
        return name.name === data.name;
      });
      this.$message.warning('点击上传按钮替换该图片');
    },
    previewImg(file) {
      this.currentUploadImg = file.url;
      this.previewSrcList = this.$refs.comUpload.uploadFiles.map(item => {
        return item.url;
      });
      setTimeout(() => {
        this.currentUploadShow = true;
      }, 1000);
    },
    handleRemove(file) {
      this.$emit('handleRemove', file);
    },
    handlePictureCardPreview(file) {
      this.$emit('handlePictureCardPreview', file);
    },
    handleDownload(file) {
      this.$emit('handleDownload', file);
    },
    beforeUpload(file) {
      if (!this.accept.split(',').includes(file.name.substring(file.name.lastIndexOf('.')))) {
        this.$$message.error('上传文件类型不符合');
        return false;
      }
      if (file.size / 1024 / 1024 > this.limitSize) {
        this.$$message.error('上传文件大小超出限制');
        return false;
      }

    },
    onChange(file, fileList) {
      console.log('file, fileList: ', file, fileList);
      if (this.repalceIndex !== -1) {
        this.$refs.comUpload.uploadFiles.splice(this.repalceIndex, 1, file);
        this.$refs.comUpload.uploadFiles.pop();
        this.repalceIndex = -1;
      }
      this.form.name = file.name;
      this.form.size = file.size + 'B';
      this.form.url = file.url;
      this.currentUploadIndex = this.$refs.comUpload.uploadFiles.findIndex(name => {
        return name.name === file.name;
      });
      this.dialogVisible = true;
    },
    onChangeName() {
      console.log(this.$refs.comUpload.uploadFiles);
      this.$refs.comUpload.uploadFiles[this.currentUploadIndex].name = this.form.name;
      //  = this.previews.url;
      this.$refs.cropper.getCropBlob((data) => {
        this.$refs.comUpload.uploadFiles[this.currentUploadIndex].url = window.URL.createObjectURL(data);
      });
      this.$message.success('保存详情成功');
      this.dialogVisible = false;
      console.log(this.$refs.comUpload.uploadFiles);
    },
    onSuccuess(response, file, fileList) {
      if (this.limit === 1) {
        this.$refs.comUpload.clearFiles();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.indexImgStyle {
  position: relative;
  height: 100%;
}
.descName {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.CropperClass {
  width: 100%;
  height: 400px;
  position: relative;
}
#corpper {
  width: 400px;
  height: 400px;
  background-image: none;
  background: #fff;
  z-index: 1002;
}
.viewImg {
  position: absolute;
  top:50%;
  left:75%;
  transform: translate(-50%,-50%);
}
</style>
