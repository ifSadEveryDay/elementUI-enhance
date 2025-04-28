
/*
属性
参数	        说明	                    类型	  可选值	默认值
text	        要处理的文本	            string	  --	     —
height	      文本高度，超出高度溢出处理 number	  --      	—
isLimitHeight	是否通过高度限制文本	     boolean	—	     false
textStyle	    文本行内样式	             object	  —
textClass	    文本class	                string/object/array	—
more	        溢出部分显示	             string	  -	       ...

插槽
名称	   说明
before	文本前面的slot
after	文本后面的slot
more	省略显示slot
 */
<template>
  <div>
    <div class="v-text-ellipsis" v-if="type === '1'">
      <slot name="before" class="v-text-ellipsis-before"></slot>
      <span
        :style="textStyle"
        :class="textClass"
        :content="text"
        @click="textClick"
      >
        <span :key="keyIndex" class="v-text-ellipsis-limit-text">{{
          text
        }}</span>
        <span v-show="oversize" class="v-text-ellipsis-more">
          <span v-if="!$slots.more">{{ more }}</span>
          <slot v-else name="more"></slot>
        </span>
      </span>
      <slot name="after" class="v-text-ellipsis-after"></slot>
    </div>
    <div v-if="type === '2'">
      <div class="typeTwoStyle" :style="typeTwo" ref="typeTwoDiv">
        {{ text }}
      </div>
    </div>
  </div>
</template>
/*
* 新增功能
* 支持指定行省略
 */
<script>
import { addClass, removeClass } from 'element-ui/lib/utils/dom';
export default {
  name: 'VTextEllipsis',
  props: {
    text: String,
    height: Number,
    isLimitHeight: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: '2'
    },
    lineNum: {
      type: Number,
      default: 1
    },
    more: {
      type: String,
      default: '...'
    },
    textStyle: [String, Object, Array],
    textClass: [String, Object, Array]
  },
  data() {
    return {
      keyIndex: 0,
      oversize: false,
      isHide: false,
      typeTwo: {
        '--line-Num': 0
      },
      showBtn: false
    };
  },
  watch: {
    isLimitHeight() {
      this.init();
    },
    text() {
      this.init();
    },
    height() {
      this.init();
    }
  },
  created() {

  },
  mounted() {
    this.typeTwo['--line-Num'] = this.lineNum;
    if (this.type === '2') {
      if (this.lineNum === 1) {
        addClass(this.$refs.typeTwoDiv, 'oneLine');
      } else {
        addClass(this.$refs.typeTwoDiv, 'someLine');
      }
    } else {
      this.init();
    }

  },
  methods: {
    init() {
      this.oversize = false;
      this.keyIndex += 1;
      const more = this.$el.querySelector('.v-text-ellipsis-more');
      more.style.display = 'none';
      if (this.isLimitHeight) {
        this.limitShow();
      }
      console.log(this.$refs.typeTwoDiv);

    },
    textClick() {
      this.$emit('click');
    },
    limitShow() {
      this.$nextTick(() => {
        const textDom = this.$el.querySelector('.v-text-ellipsis-limit-text');
        const title = this.$el;
        const more = this.$el.querySelector('.v-text-ellipsis-more');
        let n = 1000;
        if (textDom) {
          if (title.offsetHeight > this.height) {
            more.style.display = 'inline-block';
            let text = this.text;
            while (title.offsetHeight > this.height && n > 0) {
              if (title.offsetHeight > this.height * 3) {
                textDom.innerText = text = text.substring(0, Math.floor(text.length / 2));
              } else {
                textDom.innerText = text = text.substring(0, text.length - 1);
              }
              n--;
            }
            this.$emit('hide');
            this.isHide = true;
          } else {
            this.$emit('show');
            this.isHide = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-text-ellipsis-limit-text {
  word-break: break-all;
}
.typeTwoStyle {
  width: 100%;
  display: inline-block;
}
.typeTwoStyleCopy {
  width: 100%;
  display: inline-block;
  visibility: hidden;
}
.oneLine {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.someLine {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: var(--line-Num);
  -webkit-box-orient: vertical;
}
</style>
