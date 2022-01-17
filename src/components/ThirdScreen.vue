<template>
  <div class="page">
    <div class="column1">
      <div class="title">社区</div>
      <div class="community-search">
        <el-input placeholder="搜索社区内容"
                  v-model="contentSearch">
          <i slot="prefix"
             class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="hot-topic">
        <div class="hot-topic-zone">
          <div class="sub-title">热门话题</div>
          <div class="hot-topics">
            <div @click="openTopic"
                 class="hot-topic-item"
                 v-for="(topic,index) in topics"
                 :key="index">
              <div class="hot-topic-item-index">
                <div>{{index+1}}</div>
                <div class="hot-topic-item-index-rod"></div>
              </div>
              <div class="hot-topic-item-img">
                <img width="100%"
                     height="100%"
                     :src="topic.imgUrl">
              </div>
              <div class="hot-topic-item-info">
                <div class="hot-topic-item-info-title">{{topic.title}}</div>
                <div class="hot-topic-item-info-text">{{topic.text}}</div>
                <div class="hot-topic-item-info-data">
                  <span>阅读：{{topic.read}}</span>
                  <span>发帖：{{topic.posts}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column2">
      <div class="top-bar">
        <div class="title">浏览</div>
        <div class="sort">
          <div>排序方式：</div>
          <div class="sort-item">最新发布</div>
          <div class="sort-item">最多浏览</div>
          <div class="sort-item">最多评论</div>
        </div>
        <div>
          <el-button @click="openNewPost">发帖</el-button>

        </div>
      </div>
      <div class="content-zone">
        <div class="content-crest"
             v-for="(content,index) in contents"
             :key="index">
          <post-content @click.native="openContent(content.type)"
                        :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostContent from './PostContent.vue'
export default {
  components: {
    PostContent,
  },
  data () {
    return {
      dialogClass: 'dialog-mode1',
      topicDialogVisible: false,
      contentSearch: '',
      topics: [
        {
          imgUrl: require('@/assets/thirdScreen/metaverse.png'),
          title: '元宇宙是下一代互联网吗',
          text: '关于元宇宙？嘉宾们吵翻了！有人认为是以区块链为基础的互信网，有人认为就是一个概念，还有很多炒作成分，你是如何看待元宇宙呢？',
          read: 68652,
          posts: 524
        },
        {
          imgUrl: require('@/assets/thirdScreen/metaverse.png'),
          title: '元宇宙是下一代互联网吗',
          text: '元宇宙是下一代互联网吗？嘉宾们吵翻了！有人认为是以区块链为基础的互信网，有人认为就是一个概念，还有很多炒作成分，你是如何看待元宇宙呢？',
          read: 68652,
          posts: 524
        }, {
          imgUrl: require('@/assets/thirdScreen/metaverse.png'),
          title: '元宇宙是下一代互联网吗',
          text: '元宇宙是下一代互联网吗？嘉宾们吵翻了！有人认为是以区块链为基础的互信网，有人认为就是一个概念，还有很多炒作成分，你是如何看待元宇宙呢？',
          read: 68652,
          posts: 524
        }, {
          imgUrl: require('@/assets/thirdScreen/metaverse.png'),
          title: '元宇宙是下一代互联网吗',
          text: '元宇宙是下一代互联网吗？嘉宾们吵翻了！有人认为是以区块链为基础的互信网，有人认为就是一个概念，还有很多炒作成分，你是如何看待元宇宙呢？',
          read: 68652,
          posts: 524
        }
      ],
      contents: [
        {
          type: 1,
          title: '“战无不胜”的任天堂法务部，因为eShop栽了跟头',
          url: require('@/assets/thirdScreen/nintendo.jpg'),
          read: 2323,
          comment: 24,
          date: '2021-12-18',
          author: '新手小乌贼',
          headPhoto: require('@/assets/thirdScreen/xinshouxiaowuzei.jpg')
        }, {
          type: 2,
          text: '吃完这碗面，出发去vg。哈哈哈，想想都很期待，阿罗，六爷，第一次见真人啊。',
          imgs: [require('@/assets/thirdScreen/post1.jpg'), require('@/assets/thirdScreen/post2.jpg')],
          read: 2323,
          comment: 24,
          date: '2021-12-18 21:55:35',
          author: '曹孟德斯鸠',
          headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
        }, {
          type: 2,
          text: '由于短期内感觉也等不到PS5降价了，预算内想买一个Oculus Quest 2，但是我是一个纯纯的电脑白痴，想问问大家这个东西运作起来起来麻烦吗？手上有一台多年前的台式机和一台多年前的笔记本电脑。可以用这个设备吗？然后现在买合适吗，是快过时了还是正当年？购买这个设备有什么需要注意的吗？直接在淘宝买就可以了吗，配套款式有什么需要注意的？谢谢大佬们！',
          imgs: [require('@/assets/thirdScreen/post3.jpg'), require('@/assets/thirdScreen/post4.jpg'), require('@/assets/thirdScreen/post5.jpg')],
          read: 2323,
          comment: 24,
          date: '2021-12-18 21:55:35',
          author: '曹孟德斯鸠',
          headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
        }, {
          type: 1,
          title: 'R星更新了小富的故事，但玩家们的心情有些复杂',
          url: require('@/assets/thirdScreen/Rstart.jpg'),
          read: 2323,
          comment: 24,
          date: '2021-12-18',
          author: '柯泽林雾',
          headPhoto: require('@/assets/thirdScreen/kelin.jpg')

        }, {
          type: 1,
          title: '“马力欧宇宙的特殊存在 耀西一族的故事',
          url: require('@/assets/thirdScreen/yaoxi.jpg'),
          read: 2323,
          comment: 24,
          date: '2021-12-18',
          author: '80后写稿佬',
          headPhoto: require('@/assets/thirdScreen/80hou.jpg')

        }, {},
      ]
    }
  },
  methods: {
    openNewPost () {
      this.$emit('openNewPost')
    },
    openContent (type) {
      if (type === 1) {
        this.$emit('openArticle')
      }
      if (type === 2) {
        this.$emit('openPost')
      }
    },
    openTopic () {
      this.$emit('openTopic')

    },
  }

}
</script>

<style scoped>
.hot-topic-item:hover {
  animation: expand 1s;
}
.content:hover {
  animation: expand 1s;
}
.page .el-button:hover {
  background-color: #2874a6;

  color: white;
}
.page .el-button {
  height: 30px;
  margin-left: 10px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  background-color: #154360;
  border: none;
  color: white;
}
.post-img-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.post-img {
  width: 33.33%;
  height: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
}
.post-data-item {
  display: flex;
  align-items: center;
}
.post-data {
  display: flex;
  justify-content: space-evenly;
  color: #d0d3d4;
  padding: 3px 0;
  font-size: 1.6vh;
}
.post-zone {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.post-imgs {
  flex: 1;
  height: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
}
.post-text {
  text-align: start;
  padding: 0 10px;
  color: white;
  font-size: 1.6vh;
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
.post-date {
  text-align: start;
  display: flex;
  color: #d0d3d4;
  font-size: 1.4vh;
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
}
.post-author {
  color: white;
  text-align: start;
  font-size: 1.6vh;
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
}
.post-brief-right {
  height: inherit;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.post-headPhoto {
  width: 5vh;
  height: 5vh;
  border-radius: 2.5vh;
}
.post-brief {
  display: flex;
  /* align-items: stretch; */
  padding: 10px 10px 5px 10px;
}
.content-post {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
}
.article-data-part {
  display: flex;
  align-items: center;
}
.article-date {
  margin: 0 10px;
}
.article-read {
  margin: 0 5px;
}
.article-comment {
  margin: 0 5px;
}
.article-author {
  margin-left: 10px;
}
.article-data {
  padding: 10px 0;
  display: flex;
  align-items: center;
  color: #d0d3d4;
  font-size: 1.6vh;
  justify-content: space-between;
}
.article-headPhoto {
  width: 3vh;
  height: 3vh;
  border-radius: 1.5vh;
}
.article-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
}
.article-title {
  font-size: 2.6vh;
  color: white;
}
.article-info {
  position: absolute;
  bottom: 0;
  left: 10px;
  width: calc(100% - 20px);
  text-align: start;
  z-index: 3;
}
.content-article {
  position: relative;
  width: 100%;
  height: 100%;
}
.article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  height: 100%;
  border-radius: 20px;
  background-color: #1e2222;
  display: flex;
  overflow: hidden;
}
.content-crest {
  width: 50%;
  height: 33.33%;
  box-sizing: border-box;
  padding: 10px;
}
.content-zone {
  flex: 1;
  height: 0;
  display: flex;
  flex-wrap: wrap;
}
.sort .sort-item:hover {
  color: white;
  cursor: pointer;
}
.sort div {
  margin-right: 30px;
}
.sort {
  display: flex;
  padding: 0 5%;
  color: #d0d3d4;
}
.column2 .top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
}
.column2 .title {
  text-align: start;
  font-size: 3.6vh;
  color: white;
}
.column2 {
  flex: 1;
  width: 0;
  height: 100%;
  box-sizing: border-box;
  padding: 1%;
  display: flex;
  flex-direction: column;
}
.hot-topic-item-info-data {
  font-size: 1.3vh;
  display: flex;
  justify-content: space-between;
  color: #d0d3d4;
}
.hot-topic-item-info-text {
  color: #d0d3d4;
  font-size: 1.3vh;
  line-height: 2.4vh;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.hot-topic-item-info-title {
  color: white;
  font-size: 1.7vh;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.hot-topic-item-info {
  text-align: start;
  flex: 1;
  width: 0;
  height: 100%;
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hot-topic-item-img img {
  border-radius: 10px;
  object-fit: cover;
}
.hot-topic-item-img {
  width: 40%;
  height: 100%;
  box-sizing: border-box;
}
.hot-topic-item-index-rod {
  margin-top: 10px;
  width: 2vh;
  height: 2px;
  background-color: #d0d3d4;
}
.hot-topic-item-index {
  width: 10%;
  height: 100%;
  color: #c0392b;
  box-sizing: border-box;
  padding-top: 6%;
  font-size: 2.3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hot-topic-item {
  width: 100%;
  height: 23%;
  box-sizing: border-box;
  padding: 3% 0;
  display: flex;
  cursor: pointer;
}
.hot-topics {
  flex: 1;
  height: 0;
  padding: 1% 0 1% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.community-search {
  padding: 1%;
}
.community-search >>> .el-input__inner {
  background-color: #1e2222;
  border: none;
  color: white;
}
.hot-topic-zone {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 2%;
  background-color: #1e2222;
  display: flex;
  flex-direction: column;
}
.hot-topic {
  flex: 1;
  height: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 3% 1% 0 1%;
}
.column1 .sub-title {
  color: white;
  font-size: 2.5vh;
  text-align: start;
  padding: 1%;
  /* font-weight: bold; */
  letter-spacing: 2px;
}
.column1 .title {
  color: white;
  font-size: 4.5vh;
  margin-bottom: 20px;
  /* font-weight: bold; */
  letter-spacing: 2px;
}

.column1 {
  width: 33.3%;
  box-sizing: border-box;
  padding: 1%;
  display: flex;
  flex-direction: column;
}
.page {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
img {
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
}
</style>
