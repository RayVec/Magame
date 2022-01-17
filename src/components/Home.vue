<template>
  <div class="main"
       style="background-color:black;">
    <div v-if="thumb"
         class="thumb">
      <i class="el-icon-thumb"></i>

    </div>
    <el-dialog :class="dialogClass"
               :visible.sync="gameDiaglogVisible"
               :modal-append-to-body="true"
               :before-close="handleClose">
      <game-page v-if="gameDiaglogVisible" />
    </el-dialog>
    <el-dialog :class="dialogClass"
               :visible.sync="articleDialogVisible"
               :modal-append-to-body="true"
               :before-close="handleClose">
      <article-page v-if="articleDialogVisible" />
    </el-dialog>
    <el-dialog :class="dialogClass"
               :visible.sync="topicDialogVisible"
               :modal-append-to-body="true"
               :before-close="handleClose">
      <topic-page v-if="topicDialogVisible" />
    </el-dialog>
    <el-dialog :class="dialogClass"
               :visible.sync="postDialogVisible"
               :modal-append-to-body="true"
               :before-close="handleClose">
      <post-page v-if="postDialogVisible" />
    </el-dialog>
    <el-dialog :class="dialogClass"
               :visible.sync="newPostDialogVisible"
               :modal-append-to-body="true"
               :before-close="handleClose">
      <new-post v-if="newPostDialogVisible" />
    </el-dialog>

    <swiper class="wrapper"
            :options="swiperOptions">
      <div class="swiper-pagination"
           slot="pagination"></div>

      <swiper-slide>
        <div class="home">
          <div id="recommend"
               class="recommend">
            <div class="headline">
              <el-carousel :interval="4000"
                           height="60vh"
                           direction="vertical">
                <el-carousel-item>
                  <div class="item">
                    <div @click="openArticle"
                         class="recommend-content">
                      <div class="img-hover"></div>
                      <div class="title">
                        <div style="width:70%;padding-bottom:10px;">TGA上公开的宣传片，都在这里了</div>
                        <div class="sub-title">一年一度的 TGA 颁奖典礼已经落幕了，除了三十余个奖项颁出外，活动带来了大量游戏的新预告，包括有《艾尔登法环》故事预告、《心灵杀手2》公布宣传片等等。</div>
                        <div>
                          <el-button @click="openArticle">阅读详情</el-button>
                        </div>

                      </div>
                      <img :src="require('@/assets/recommend/TGA.jpg')">
                    </div>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="item">
                    <div @click="openArticle"
                         class="recommend-content">

                      <div class="img-hover"></div>
                      <div class="title">
                        <div style="padding-bottom:10px;">《双人成行》并非「商标欺凌」唯一受害者，Take-Two究竟图什么？</div>
                        <div class="sub-title">一年一度的 TGA 颁奖典礼已经落幕了，除了三十余个奖项颁出外，活动带来了大量游戏的新预告，包括有《艾尔登法环》故事预告、《心灵杀手2》公布宣传片等等。</div>
                        <div>
                          <el-button @click="openArticle">阅读详情</el-button>
                        </div>

                      </div>
                      <img :src="require('@/assets/recommend/ps5.jpg')">
                    </div>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="item">
                    <div @click="openArticle"
                         class="recommend-content">

                      <div class="img-hover"></div>
                      <img :src="require('@/assets/recommend/Salzaar.jpg')">
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="rank">
              <div class="rank_content">
                <div class="title">用这些游戏为2021画上句号吧</div>
                <div class="games">
                  <div @click="openGame"
                       class="game">
                    <img :src="require('@/assets/recommend/solarAsh.jpg')">
                    <div class="game_info">
                      <div class="game_title">太阳灰国</div>
                      <div class="game_platform">PS5,PS4,PC</div>
                      <div class="game_intro">《光明旅者》开发商最新作品。</div>
                    </div>
                  </div>
                  <div @click="openGame"
                       class="game">
                    <img :src="require('@/assets/recommend/halo_infinite.jpg')">
                    <div class="game_info">
                      <div class="game_title">光环 无限</div>
                      <div class="game_platform">XSX|S,XB1,PC</div>
                      <div class="game_intro">
                        成为士官长，穿上人类最伟大英雄的盔甲。</div>
                    </div>
                  </div>
                  <div @click="openGame"
                       class="game">
                    <img :src="require('@/assets/recommend/final_fantasy14.jpg')">
                    <div class="game_info">
                      <div class="game_title">最终幻想14 晓月的终焉</div>
                      <div class="game_platform">PS5,PS4,PC,PS3</div>
                      <div class="game_intro">故事迎来高潮，「海德林＆佐迪亚克篇」的完结篇！</div>
                    </div>
                  </div>
                  <div @click="openGame"
                       class="game">
                    <img :src="require('@/assets/recommend/fate_seeker.jpg')">
                    <div class="game_info">
                      <div class="game_title">天命奇御二</div>
                      <div class="game_platform">PC</div>
                      <div class="game_intro">神探仗剑行天下</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <div class="bottom">
            <div class="item">
              <template v-if="playControl">
                <div class="img-hover"></div>
                <img class="video-img"
                     :src="require('@/assets/bottom/Demon-Slayer.png')">
                <div class="title">
                  《鬼灭之刃 火之神血风谭》发布第三弹免费更新「愈史郎·珠世」宣传片
                </div>
                <img class="play"
                     @click="playClick"
                     :src="require('@/assets/video/play.jpg')">
              </template>
              <video v-show="!playControl"
                     id="bottomVideo"
                     width="100%"
                     height="100%"
                     :src="require('@/assets/video/Demon-Slayer.mp4')"
                     @ended="bottomVideoEnded"
                     @pause="bottomVideoPause"
                     controls></video>
            </div>
            <div class="item1"
                 @click="openArticle">
              <div class="title1">《真·女神转生5》评测：痛苦但又快乐的矛盾体验</div>
              <div class="sub-title">能经受住外在表现上刻意虐待玩家感官的元素，就能尽情享受随之而来的乐趣。老实说我并不是一个《真女神转生》系列的老玩家，甚至接触电子游戏的时间都不算长。但也正因如此，当《真·女神转生5》最初宣发时，玩家社群的反应把我激将了一番：「这游戏不适合新玩家」「一般玩家肯定玩不下去吧」……这等等言论让我更加好奇。</div>
              <div style="display:flex;justify-content:space-between;padding:15px 20px;flex:1;height:0;">
                <img width="45%"
                     height="100%"
                     style="border-radius:10px;"
                     :src="require('@/assets/recommend/nvshen1.jpg')">
                <img width="45%"
                     height="100%"
                     style="border-radius:10px;"
                     :src="require('@/assets/recommend/nvshen2.jpg')">
              </div>
            </div>
            <div @click="openTopic"
                 class="item topic">
              <div class="topic-title">
                <el-tag type="success">话题</el-tag>
                元宇宙区块链游戏是骗局吗？
              </div>
              <div class="topic-content">
                <div class="topic-item">
                  <div class="topic-text">元宇宙、区块链、游戏。。。这些标签组合在一起，简直不要太吸引人，然而往往吸引力和风险都是并存的，所以越是看起来充满机会的地方，越是要防范风险。</div>
                  <div class="topic-brief">
                    <span>文创客</span>
                    <span>12月13日 20:26</span>
                  </div>
                </div>
                <div class="topic-item">
                  <div class="topic-text">只有你不贪心，不相信天上掉馅饼，就不可能陷入骗局了。另外，你跟2000年的马夫说，未来人类可以坐飞机旅行，他一定会认为你是个骗子。</div>
                  <div class="topic-brief">
                    <span>朱芳文</span>
                    <span>12月12日 12:18</span>
                  </div>
                </div>
                <div class="topic-item">
                  <div class="topic-text">虚拟世界的虚拟货币投资就能躺赚？理想很丰满，现实很骨感。第一骨感就是主权国家并不认可虚拟货币，我们国家态度是打击。所以，这玩意儿分分钟就可能被修理。
                    元宇宙目前只是概念，很多人不明就里的盲目跟风，不被骗那是烧了高香，被骗是必然。
                  </div>
                  <div class="topic-brief">
                    <span>John谯华</span>
                    <span>12月13日 11:18</span>
                  </div>
                </div>
                <div class="topic-item">
                  <div class="topic-text">并不是所有行业都适合新的概念，并不是所有团队都能转型到元宇宙，这个概念性的东西尚未得到验证，我觉得大家还是脚踏实地干好自己当下的工作，时刻关注着元宇宙寻找机会。</div>
                  <div class="topic-brief">
                    <span>南阳日报 </span>
                    <span>12月14日 10:15</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <secondary-screen @openGame="openGame" />
      </swiper-slide>
      <swiper-slide>
        <third-screen @openTopic="openTopic"
                      @openArticle="openArticle"
                      @openPost="openPost"
                      @openNewPost="openNewPost" />
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
import secondaryScreen from './SecondaryScreen.vue'
import thirdScreen from './ThirdScreen.vue'
import gamePage from './GamePage.vue'
import articlePage from './ArticlePage.vue'
import topicPage from './TopicPage.vue'
import postPage from './PostPage.vue'
import newPost from './NewPost.vue'



export default {
  components: {
    topicPage,
    secondaryScreen,
    thirdScreen,
    gamePage,
    articlePage,
    postPage,
    newPost
  },
  data () {
    return {
      thumb: false,
      // 配置参数
      swiperOptions: {
        // 分页器
        pagination: {
          el: '.swiper-pagination',   // 分页器元素
          clickable: true   // 点击分页器切换
        },
        // Some Swiper option/callback...
      },
      articleDialogVisible: false,
      gameDiaglogVisible: false,
      topicDialogVisible: false,
      postDialogVisible: false,
      newPostDialogVisible: false,
      playControl: true,
      dialogClass: 'dialog-mode1'
    }
  },
  created () {
  },
  mounted () {
    this.playAnimation()
  },
  methods: {
    playAnimation () {
      if (localStorage.getItem('home-animation')) {
        return
      }
      this.thumb = true
      let _this = this
      setTimeout(() => {
        var target = document.querySelector('.thumb');
        let player = target.animate([
          { transform: 'translate(0)' },
          { transform: 'translate(-80vw, 0)' }
        ], 800)
        player.addEventListener('finish', function () {
          let player1 = target.animate([
            { transform: 'translate(0)' },
            { transform: 'translate(-80vw, 0)' }
          ], 800)
          player1.addEventListener('finish', function () {
            _this.thumb = false
            localStorage.setItem('home-animation', 0)
          });
        });
      }, 300)

    },
    openNewPost () {
      //设置弹窗的尺寸
      let xlength = document.body.clientWidth
      let ylength = document.body.clientHeight
      let xyrate = xlength / ylength
      if (xyrate > 16 / 9) {
        this.dialogClass = 'dialog-mode1'
      }
      else {
        this.dialogClass = 'dialog-mode2'

      }
      this.newPostDialogVisible = true
    },
    openPost () {
      //设置弹窗的尺寸
      let xlength = document.body.clientWidth
      let ylength = document.body.clientHeight
      let xyrate = xlength / ylength
      if (xyrate > 16 / 9) {
        this.dialogClass = 'dialog-mode1'
      }
      else {
        this.dialogClass = 'dialog-mode2'

      }
      this.postDialogVisible = true
    },
    openTopic () {
      //设置弹窗的尺寸
      let xlength = document.body.clientWidth
      let ylength = document.body.clientHeight
      let xyrate = xlength / ylength
      if (xyrate > 16 / 9) {
        this.dialogClass = 'dialog-mode1'
      }
      else {
        this.dialogClass = 'dialog-mode2'

      }
      this.topicDialogVisible = true
    },
    openArticle () {
      //设置弹窗的尺寸
      let xlength = document.body.clientWidth
      let ylength = document.body.clientHeight
      let xyrate = xlength / ylength
      if (xyrate > 16 / 9) {
        this.dialogClass = 'dialog-mode1'
      }
      else {
        this.dialogClass = 'dialog-mode2'

      }
      this.articleDialogVisible = true
    },
    openGame () {
      //设置弹窗的尺寸
      let xlength = document.body.clientWidth
      let ylength = document.body.clientHeight
      let xyrate = xlength / ylength
      if (xyrate > 16 / 9) {
        this.dialogClass = 'dialog-mode1'
      }
      else {
        this.dialogClass = 'dialog-mode2'

      }
      this.gameDiaglogVisible = true

    },
    bottomVideoPause () {
      // this.playControl = true
    },
    bottomVideoEnded () {
      this.playControl = true
    },
    playClick () {
      this.playControl = false
      let video = document.getElementById('bottomVideo')
      video.play();

    },
    swipe (e) {
      console.log(e)
      if (e === 'left') {
        this.swiperleft()
      }
      if (e === 'right') {
        this.swiperright()
      }
    },
    swiperleft: function () {
      this.$refs.home_carousel.next()

    },
    swiperright: function () {
      this.$refs.home_carousel.prev()

    }

  }
}
</script>

<style scoped>
.thumb {
  position: fixed;
  right: 10%;
  top: 35%;
  z-index: 9;
  font-size: 15vh;
  color: white;
}
.topic-title >>> .el-tag {
  height: 25px;
  line-height: 25px;
  margin-right: 10px;
}
.topic:hover {
  animation: expand 1s;
}
.item1:hover {
  animation: expand 1s;
}
.game:hover {
  animation: expand 1s;
}
.wrapper >>> .swiper-pagination-bullet {
  background-color: #ebebeb;
}
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: white;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.main >>> .el-dialog__wrapper {
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;

  /* filter: blur(2px); */
  /* z-index: 3 !important; */
}

.main >>> .el-dialog__headerbtn {
  right: -50px;
  top: -30px;
  /* top: 50%; */
  background-color: #212121;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
.main >>> .el-dialog__body {
  height: 100%;
  box-sizing: border-box;
  padding: 30px 20px 0px 20px;
}
.main >>> .el-dialog__header {
  padding: 0;
  /* visibility: hidden; */
  /* display: none; */
}
.main >>> .el-dialog__headerbtn .el-dialog__close {
  font-size: 3vh;
}
.dialog-mode2 >>> .el-dialog {
  position: relative;

  border-radius: 30px;
  background-color: #212121;
  width: 90vw;
  height: 50.625vw;
  aspect-ratio: 16/9;
  filter: blur(0px) !important;

  margin-top: 8vh !important;
  box-shadow: 0 0 15px #212121;
}
.dialog-mode1 >>> .el-dialog {
  border-radius: 30px;
  background-color: #212121;

  height: 90vh;
  width: 160vh;

  filter: blur(0px) !important;

  margin-top: 5vh !important;
  box-shadow: 0 0 15px #212121;
}
.video-img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: cover;
}
.topic-brief {
  display: flex;
  justify-content: space-between;
  font-size: 1.4vh;
  color: #d0d3d4;
}
.topic-text {
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  width: 100%;
}
.topic-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 10px;
  height: 45%;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.8vh;
  line-height: 2.8vh;
  /* 防止多列布局，分页媒体和多区域上下文中的意外中断 */
  break-inside: avoid;
  background: black;
  color: white;
}
.topic-content {
  flex: 1;
  height: 0;
  column-count: 2;
  column-width: 46%;
  column-gap: 4%;
  padding: 0 20px;
}
.topic-title {
  font-size: 2.5vh;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
.play {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 40%;
  z-index: 3;
  cursor: pointer;
}
video {
  object-fit: contain;
}
.rank .game_title {
  font-size: 2vh;
  overflow: hidden;
  /*文本不会换行*/
  white-space: nowrap;
  /*当文本溢出包含元素时，以省略号表示超出的文本*/
  text-overflow: ellipsis;
}
.rank .game_intro {
  font-size: 1.6vh;
  padding: 2px 0;
  color: #d0d3d4;
}
.rank .game_platform {
  padding: 2px 0;
  font-size: 1.6vh;
  color: gray;
}
.rank .game_info {
  padding: 0 10px;
  /* display: none; */
}
.game img {
  /* display: none; */
  width: 50%;
  max-width: 50%;
  height: 100%;
  border-radius: 10px;
  /* object-fit: cover; */
  /* max-height: 80px; */
}
.rank_content .game {
  width: 100%;
  height: 20%;
  display: flex;
  overflow: hidden;
  cursor: pointer;
}
.rank_content .games {
  flex: 1;
  height: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  padding: 0 20px;
}

.rank_content .title {
  letter-spacing: 1px;
  font-size: 2.5vh;
  padding: 10px 20px;
}
.rank_content {
  display: flex;
  flex-direction: column;
  color: white;
  text-align: start;
  height: 60vh;
  overflow: hidden;
}
.rank {
  border-radius: 30px;
  background-color: #1e2222;
  /* padding: 10px; */
  width: 32%;
  height: 60vh;
}
.bottom >>> .img-hover {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
}
.img-full {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.recommend .sub-title {
  width: 70%;
  font-size: 2vh;
  padding-bottom: 3vh;
}
.headline {
  width: 66%;
}
.headline img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.recommend-content {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.recommend .item .title {
  position: absolute;
  font-size: 2.8vh;
  bottom: 5%;
  left: 5px;
  z-index: 3;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 5px 20px;
}
.item1 img {
  object-fit: cover;
}
.bottom .item1 .sub-title {
  line-height: 3vh;

  font-size: 1.8vh;
  color: #d0d3d4;
  /* display: flex; */
  padding: 0 20px;
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 3;
}
.bottom .item1 .title1 {
  font-size: 2.5vh;
  z-index: 3;
  color: white;
  display: flex;
  padding: 10px 20px;
}
.bottom .item .title {
  position: absolute;
  font-size: 2.5vh;
  bottom: 0px;
  left: 0px;
  z-index: 3;
  color: white;
  display: flex;
  padding: 10px;
}
.bottom .item1 {
  position: relative;
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  height: 100%;
  overflow: hidden;
  background-color: #1e2222;
  border-radius: 30px;
  cursor: pointer;
}
.bottom .item {
  position: relative;
  width: 32%;
  height: 100%;
  text-align: start;
  /* height: 100%; */
  background-color: #1e2222;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.bottom {
  flex: 1;
  height: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.recommend-content >>> .img-hover {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to left bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
}

.recommend >>> .swiper__item--card {
  /* width: 75%;
  left: -12.5%; */
  border-radius: 30px;
  overflow: hidden;
}
.recommend >>> .swiper {
  width: 100%;
  /* padding: 10px; */
}
.recommend >>> .swiper__container {
  height: 60vh;
}

.swiper__item:nth-child(2n) {
  background-color: unset;
}

.swiper__item:nth-child(2n + 1) {
  background-color: unset;
}
img {
  border-radius: 30px;

  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
}
.recommend .item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.recommend {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  height: 60vh;
}
.home {
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100%;
  width: 100vw;
  /* overflow: hidden; */
}
.topic {
  cursor: pointer;
}
</style>