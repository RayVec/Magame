<template>
  <div class="v-reader">
    <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
    <div class="read-wrapper">
      <div id='read'></div>
      <div @click="prevPage"
           class="button-left">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div @click="nextPage"
           class="button-right">
        <i class="el-icon-arrow-right"></i>

      </div>
      <div class="mask">
        <div class="left"
             @click="prevPage"></div>
        <div class="center"
             @click="toggleTitleAndMenu"></div>
        <div class="right"
             @click="nextPage"></div>
      </div>
    </div>

  </div>
</template>

<script>



import Epub from 'epubjs'
// eslint-disable-next-line no-tabs
const DOWNLOAD_URL = 'static/111.epub'	// 载入下载电子书
global.ePub = Epub // 设置全局的ePub对象

export default {
  components: {
    // eslint-disable-next-line no-tabs


  },
  data () {
    return {
      ifTitleAndMenuShow: false,
      fontSizeList: [
        { fontSize: 12 },
        { fontSize: 14 },
        { fontSize: 16 },
        { fontSize: 18 },
        { fontSize: 20 },
        { fontSize: 22 },
        { fontSize: 24 }
      ],
      defaultFontSize: 16,
      themeList: [
        {
          name: '默认',
          style: {
            body: {
              'color': '#FDFEFE',
              'background': '#FDFEFE'
            }
          }
        },
        {
          name: '护眼',
          style: {
            body: {
              'color': '#000',
              'background': '#ceeaba'
            }
          }
        },
        {
          name: '夜间',
          style: {
            body: {
              'color': '#fff',
              'background': '#000'
            }
          }
        },
        {
          name: '古典',
          style: {
            body: {
              'color': '#000',
              'background': 'rgb(241,236,226)'
            }
          }
        }
      ],
      defaultTheme: 2,
      bookAvailable: false,
      navigation: null
    }
  },
  methods: {
    showTips () {
      if (localStorage.getItem('showtips')) {
        return
      }
      let left = document.getElementsByClassName('left')[0]
      left.className = 'left tips'
      let right = document.getElementsByClassName('right')[0]
      right.className = 'right tips'
      left.innerText = '左翻页'
      right.innerText = '右翻页'

    },
    slideBanner: function () {
      let _this = this
      //选中item的盒子
      var box = document.querySelector('.v-reader');

      //手指起点X坐标
      var startPoint = 0;
      //手指滑动重点X坐标
      var stopPoint = 0;

      //重置坐标
      var resetPoint = function () {
        startPoint = 0;
        stopPoint = 0;
      }

      //手指按下
      box.addEventListener("touchstart", function (e) {
        //手指点击位置的X坐标
        startPoint = e.changedTouches[0].pageX;
        // eslint-disable-next-line no-debugger
        // debugger
      });
      //手指滑动
      box.addEventListener("touchmove", function (e) {
        //手指滑动后终点位置X的坐标
        stopPoint = e.changedTouches[0].pageX;
      });
      //当手指抬起的时候，判断图片滚动离左右的距离
      box.addEventListener("touchend", function () {
        console.log("1：" + startPoint);
        console.log("2：" + stopPoint);
        if (stopPoint == 0 || startPoint - stopPoint == 0) {
          resetPoint();
          return;
        }
        if (startPoint - stopPoint > 0) {
          resetPoint();
          _this.rendition.next()

          return;
        }
        if (startPoint - stopPoint < 0) {
          resetPoint();
          _this.rendition.prev()

          return;
        }
      });
    },

    // 电子书的解析和渲染
    showEpub () {
      // 解析电子书,生成Book对象
      this.book = new Epub(DOWNLOAD_URL)
      // console.log(this.book)

      let wrapper = document.getElementsByClassName('read-wrapper')[0]
      let wrapperStyle = window.getComputedStyle(wrapper, null)

      // 通过Book.renderTo生成Rendition对象(对象名不唯一)
      this.rendition = this.book.renderTo('read', {
        // 第一个参数是div的id
        width: wrapperStyle.width,
        height: wrapperStyle.height
      })
      // console.log(rendition)
      // 通过Rendtion.display渲染电子书
      this.rendition.display()
      // 获取Theme对象
      this.themes = this.rendition.themes
      // 设置默认字体
      this.setFontSize(this.defaultFontSize)
      //  thems的俩个方法:
      // 主题注册:this.themes.register(name,styles)
      // 主题切换:this.themes.select(name)
      // this.registerTheme()
      this.setTheme(this.defaultTheme)
      // 获取Locations对象
      // 通过epubjs钩子函数来实现电子书定位
      this.book.ready.then(() => {
        // 生成目录
        this.navigation = this.book.navigation
        // console.log(this.navigation);
        return this.book.locations.generate()
      }).then(() => {
        this.locations = this.book.locations
        // this.onProgressChange(50); //实现跳转到百分之50的位置
        this.bookAvailable = true
      })
    },
    // 翻页功能
    prevPage () {
      if (!localStorage.getItem("showtips")) {
        let left = document.getElementsByClassName('left')[0]
        left.className = 'left'
        let right = document.getElementsByClassName('right')[0]
        right.className = 'right'
        left.innerText = ''
        right.innerText = ''
        localStorage.setItem('showtips', 0)
        return
      }
      // rendition.prev方法实现上一页
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      if (!localStorage.getItem("showtips")) {
        let left = document.getElementsByClassName('left')[0]
        left.className = 'left'
        let right = document.getElementsByClassName('right')[0]
        right.className = 'right'
        left.innerText = ''
        right.innerText = ''
        localStorage.setItem('showtips', 0)
        return
      }
      // rendition.next方法实现下一页
      this.rendition.next()
    },
    // 标题栏和菜单栏
    toggleTitleAndMenu () {
      // 切换
      this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
      if (!this.ifTitleAndMenuShow) {
        // ref 加在子组件上,获取到的是组件实例,可以使用组件的所有方法,this.$refs.(ref值).组件方法,。
        this.$refs.menuBar.hideSetting()
      }
    },
    // 设置字体大小切换
    setFontSize (fontSize) {
      this.defaultFontSize = fontSize
      if (this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    },
    registerTheme () {
      this.themeList.forEach(theme => {
        // 注册全部主题颜色样式
        this.themes.register(theme.name, theme.style)
      })
    },
    setTheme (index) {
      // 切换主题
      this.themes.select(this.themeList[index].name)
      this.defaultTheme = index
    },
    // propress进度条的数值(0-100)
    onProgressChange (progress) {
      const percentage = progress / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(location)
    },
    hideTitleAndMenu () {
      // 隐藏标题栏和菜单栏
      this.ifTitleAndMenuShow = false
      // 隐藏菜单栏弹出的设置栏
      this.$refs.menuBar.hideSetting()
      // 隐藏目录
      this.$refs.menuBar.hideContent()
    },
    // 根据链接跳转到指定位置(目录)
    jumpTo (href) {
      this.rendition.display(href)
      this.hideTitleAndMenu()
    }
  },
  mounted () {
    // 页面加载后
    this.showEpub()
    this.slideBanner()
    this.showTips()
  }
}
</script>

<style lang="scss" scoped>
.button-right {
  position: absolute;
  right: 0;
  top: 45%;
  display: flex;
  z-index: 3;
  font-size: 24px;
  cursor: pointer;
}
.button-left {
  position: absolute;
  left: 0;
  top: 45%;
  display: flex;
  z-index: 3;
  font-size: 24px;
  cursor: pointer;
}

$fontSize: 37.5;
@function px2rem($px) {
  @return ($px / $fontSize) + rem;
}

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tips {
  background-color: rgb(82, 82, 82);
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5vh;
}

.v-reader {
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  .read-wrapper {
    width: 100%;
    height: 100%;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      z-index: 2;
      .left {
        flex: 0 0 20%;
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 20%;
      }
    }
  }
}
</style>