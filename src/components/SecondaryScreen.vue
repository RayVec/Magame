<template>

  <div class="gameZone">
    <div class="leftBar">
      <div class="title">游戏库</div>
      <template v-if="gameAlbum">
        <div class="catalogs">
          <div class="catalog">全部</div>
          <div class="catalog">PS4专区</div>
          <div class="catalog">XBOX专区</div>
          <div class="catalog">Switch专区</div>
          <div class="catalog">PC专区</div>
        </div>
        <div class="divide"></div>
        <div class="catalogs">
          <div class="catalog"
               @click="gameAlbumClick">游戏专辑</div>
        </div>
      </template>
      <template v-else>
        <div class="catalogs">
          <div class="catalog">步入2021的尾声</div>
          <div class="catalog">精彩不断的十月</div>
          <div class="catalog">目不暇接的九月</div>
          <div class="catalog">夏末等桂香</div>
          <div class="catalog">七月爽玩一夏</div>
          <div class="divide"></div>
          <div class="catalog"
               @click="gameAlbumBack">
            <div class="back">
              <i class="el-icon-back"></i>
              <div style="margin-left:20px;">返回</div>
            </div>
          </div>
        </div>

      </template>
    </div>
    <div class="rightContent">
      <div class="topBar">
        <el-input placeholder="请输入内容"
                  v-model="gameSearch">
          <i slot="prefix"
             class="el-input__icon el-icon-search"></i>
        </el-input>
        <div class="sort">
          <div>排序方式:</div>
          <div class="content">
            <div>最新推出</div>
            <div>评分最高</div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="recommend">
          <div class="title">你可能喜欢</div>
          <div class="content">
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/farcry.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div class="game-name">
                  <div>孤岛惊魂6</div>
                  <el-rate :value="4.2"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                </div>
                <!-- <div class="game-brief-platform">XSX|S,PS5,PS4,XB1,PC</div> -->
                <div class="game-brief-intro">「炸鸡叔」反派归来！</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div class="game-name">
                  <div>仙剑奇侠传七</div>
                  <el-rate :value="3.1"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                </div>
                <!-- <div class="game-brief-platform">XSX|S,PS5,PS4,XB1,PC</div> -->

                <div class="game-brief-intro">人神魔三族的故事还在继续</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/Metroid.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div class="game-name">
                  <div>密特罗德 生存恐惧</div>
                  <el-rate :value="4.8"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                </div>
                <div class="game-brief-intro">苦等多年，萨姐归来</div>
              </div>
              <!-- <div class="game-brief-platform">XSX|S,PS5,PS4,XB1,PC</div> -->
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/idol.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div class="game-name">
                  <div>偶像大师 星耀季节</div>
                  <el-rate :value="4.5"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                  </el-rate>
                </div>
                <div class="game-brief-intro">“偶像”的全新故事就此展开！</div>
              </div>
            </div>

          </div>
        </div>
        <div class="list">
          <div class="title">游戏列表</div>
          <div class="content">
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <!-- <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div> -->
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/Metroid.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div>
              </div>
            </div>
            <div @click="openGame"
                 class="game">
              <img :src="require('@/assets/gamelist/pal7.jpg')"
                   class="game-img">
              <div class="game-brief">
                <div>仙剑奇侠传七</div>
                <div class="game-brief-intro">即时战斗的仙剑，人神魔三族的故事还在继续。</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      gameAlbum: true,
      gameSearch: ''
    }
  },
  mounted () {

  },
  methods: {
    openGame () {

      this.$emit('openGame')
    },
    gameAlbumBack () {
      this.gameAlbum = true
    },
    gameAlbumClick () {
      this.gameAlbum = false
    }
  }
}
</script>

<style scoped>
.game-name >>> .el-rate__text {
  font-size: 0.8vw;
}
.game-name >>> .el-rate__icon {
  font-size: 0.8vw;
  margin-right: 0.05vw;
}
.game-name >>> .el-rate {
  width: min-content;
  display: flex;
  align-items: center;
}
.game-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.game-brief-platform {
  padding: 5px 0;
  font-size: 12px;
  overflow: hidden;
  /*文本不会换行*/
  white-space: nowrap;
  /*当文本溢出包含元素时，以省略号表示超出的文本*/
  text-overflow: ellipsis;
}
.game-brief-intro {
  padding: 2px 0;
  font-size: 0.9vw;

  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  color: #d0d3d4;
}
.game-brief {
  font-size: 1.2vw;
  flex: 1;
  height: 0;
  text-overflow: ellipsis;
  text-align: start;
  padding: 0;
  color: white;
  padding: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.game-img {
  border-radius: 0;
  background-color: #1e2222;
  height: 65%;
  width: 100%;
  object-fit: cover;
  /* aspect-ratio: 16/9; */
}
.list .content .game {
  display: flex;
  flex-direction: column;
  width: 22%;
  height: 48%;
  box-sizing: border-box;
  border-radius: 15px;
  box-sizing: border-box;
  margin: 1% 1.5%;
  border-radius: 15px;
  overflow: hidden;
  background-color: #1e2222;
  /* padding: 0px 4%; */
  /* margin-bottom: 20px; */
  cursor: pointer;
}
.list .content {
  flex: 1;
  height: 0;
  /* padding: 10px 0; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list .title {
  text-align: start;
  color: white;
  font-size: 2.8vh;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 10px;
}
.main .list {
  height: 66.6%;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 20px;
  /* padding: 5px; */
  /* padding: 15px 0; */
  display: flex;
  flex-direction: column;
}
.game:hover {
  animation: expand 1s;
}
.game {
  transition: all ease-in-out;
}
.recommend .content .game {
  display: flex;
  flex-direction: column;
  width: 22%;
  height: 98%;
  box-sizing: border-box;
  border-radius: 15px;
  box-sizing: border-box;
  margin: 1% 1.5%;
  border-radius: 15px;
  overflow: hidden;
  background-color: #1e2222;
  cursor: pointer;
}
.recommend .content {
  flex: 1;
  height: 0;
  /* padding: 10px 0 0 0; */
  display: flex;
  justify-content: space-between;
}
.recommend .title {
  text-align: start;
  color: white;
  font-size: 1.5vw;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 10px;
}
.main .recommend {
  height: 33.3%;
  box-sizing: border-box;
  /* padding: 5px; */
  /* padding: 15px 0; */
  display: flex;
  flex-direction: column;
}
.rightContent .main {
  flex: 1;
  height: 0;
}
.sort .content div:hover {
  color: white;
  cursor: pointer;
}
.sort .content div {
  margin-right: 20px;
}
.sort .content {
  display: flex;
  padding: 0 20px;
}
.topBar .sort {
  color: #d0d3d4;
  padding: 0 0 0 30px;
  display: flex;
  align-items: center;
}
.rightContent .topBar {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  height: max-content;
  padding-left: 10px;
}
.rightContent .el-input {
  height: 40px;
  width: 40%;
}
.leftBar .back {
  display: flex;
  align-items: center;
}
.divide {
  width: 50%;
  margin-left: 20%;
  margin-bottom: 10px;
  height: 2px;
  background-color: #1e2222;
}
.rightContent {
  flex: 1;
  width: 0;
  display: flex;
  flex-direction: column;
}
.gameZone .catalog:hover {
  color: white;
  background-color: #1e2222;
}
.gameZone .catalog {
  border-radius: 10px;
  height: 8vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding-left: 20%;
  cursor: pointer;
  margin-bottom: 20px;
}
.gameZone .catalogs {
  padding: 10px 0;
  color: #d0d3d4;
  font-size: 1.5vw;
}
.gameZone .leftBar .title {
  color: white;
  font-size: 2.2vw;
  margin-bottom: 20px;
  /* font-weight: bold; */
  letter-spacing: 2px;
}
.gameZone .leftBar {
  width: 20%;
}
.gameZone {
  box-sizing: border-box;
  height: 100%;
  padding: 20px;
  display: flex;
}
.gameZone >>> .el-input__inner {
  background-color: #1e2222;
  border: none;
  color: white;
}
img {
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
}
</style>