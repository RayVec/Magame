<template>
  <div class="postPage">
    <div class="left">
      <div class="content">
        <template v-if="content.type===1">
          <div class="content-article">
            <img class="article-img"
                 :src="content.url">
            <div class="article-hover"></div>
            <div class="article-info">
              <div class="article-title">{{content.title}}</div>
              <div class="article-data">
                <div class="article-data-part">
                  <img class="article-headPhoto"
                       :src="content.headPhoto">
                  <div class="article-author">{{content.author}}</div>
                </div>
                <div class="article-data-part">
                  <div class="article-date">{{content.date}}</div>
                  <i class="el-icon-chat-line-round"></i>
                  <div class="article-comment">{{content.comment}}</div>
                  <i class="el-icon-view"></i>
                  <div class="article-read">{{content.read}}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="content.type===2">
          <div class="content-post">
            <div class="post-zone">
              <div class="post-brief">
                <img class="post-headPhoto"
                     :src="content.headPhoto">
                <div class="post-brief-right">
                  <div class="post-author">{{content.author}}</div>
                  <div class="post-date">
                    <div>{{content.date}}</div>
                  </div>
                </div>
              </div>
              <div class="post-text">{{content.text}}</div>
              <div class="post-imgs">
                <div class="post-img"
                     v-for="(img,index) in content.imgs"
                     :key="index">
                  <img class="post-img-img"
                       :src="img">

                </div>

              </div>
              <div class="post-data">
                <div class="post-data-item">
                  <i class="el-icon-chat-line-round"></i>
                  <div class="article-comment">{{content.comment}}</div>
                </div>
                <div class="post-data-item">
                  <i class="el-icon-view"></i>
                  <div class="article-read">{{content.read}}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="right">
      <div class="comment-title">评论</div>
      <div class="comment-manual">
        <el-input v-model="input"
                  placeholder="请输入内容"></el-input>
        <el-button>发送</el-button>
      </div>
      <div v-for="i in 4"
           :key="i"
           class="comment">
        <img class="comment-headPhoto"
             :src="content.headPhoto">

        <div class="comment-info">
          <div class="comment-author-name">我的的</div>
          <div class="comment-time">1-3</div>
          <div class="comment-text">
            NFT链上的能“跨平台”买，但是你要使用这些腾讯道具，就必须还得回到腾讯的平台才能有权使用，就像你可以买其他国家的邮票，但那邮票就只能在那个国家使用。
          </div>
          <div class="comment-comment">
            <div class="comment-comment-item">
              <span class="comment-comment-author">三清hi夫</span>
              <span class="comment-comment-text">还不太一样，NFT是去中心化的，能卖给其他用户。你说的氪金道具都是属于企鹅，是中心化的。
              </span>
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
      input: '',
      content: {
        type: 2,
        text: '由于短期内感觉也等不到PS5降价了，预算内想买一个Oculus Quest 2，但是我是一个纯纯的电脑白痴，想问问大家这个东西运作起来起来麻烦吗？手上有一台多年前的台式机和一台多年前的笔记本电脑。可以用这个设备吗？然后现在买合适吗，是快过时了还是正当年？购买这个设备有什么需要注意的吗？直接在淘宝买就可以了吗，配套款式有什么需要注意的？谢谢大佬们！',
        imgs: [require('@/assets/thirdScreen/post3.jpg'), require('@/assets/thirdScreen/post4.jpg'),
        require('@/assets/thirdScreen/post5.jpg'), require('@/assets/thirdScreen/post5.jpg'),
        require('@/assets/thirdScreen/post5.jpg'),
        require('@/assets/thirdScreen/post5.jpg')
        ],
        read: 2323,
        comment: 24,
        date: '2021-12-18 21:55:35',
        author: '曹孟德斯鸠',
        headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
      },
    }
  }

}
</script>

<style scoped>
.comment-comment-author {
  color: #3498db;
  padding-right: 5px;
}
.comment-comment-author::after {
  content: ":";
}
.comment-comment {
  margin-top: 5px;
  padding: 5px 5px;
  background-color: #424242;
  border-radius: 5px;
  font-size: 1.8vh;
  color: white;
}
.comment-text {
  margin-top: 5px;
  color: white;
  font-size: 1.8vh;
}
.comment-time {
  margin-top: 0.8vh;
  text-align: start;
}
.comment-author-name {
  font-size: 1.8vh;
}
.comment-info {
  padding: 0 0 0 10px;
  color: #b3b6b7;
}
.comment-headPhoto {
  width: 4vh;
  height: 4vh;
  border-radius: 2vh;
}
.comment-author {
  display: flex;
  color: white;
}
.comment {
  display: flex;
  flex-direction: row;
  padding: 10px 0 5px 0;
  text-align: start;
}
.comment-manual {
  display: flex;
}
.comment-title {
  display: flex;
  text-align: start;
  padding: 0 0 10px 0;
  color: white;
  font-size: 2.4vh;
}
.post-img-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 10px;
}
.post-img {
  width: 33.33%;
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
  padding: 10px 0;
  font-size: 2vh;
}
.post-zone {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.post-imgs {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.post-text {
  text-align: start;
  padding: 10px 10px;
  color: white;
  font-size: 2vh;
  overflow: hidden;
  line-height: 3vh;
}
.post-date {
  text-align: start;
  display: flex;
  color: #d0d3d4;
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
.post-author {
  color: white;
  text-align: start;
  font-size: 2vh;
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
  width: 6vh;
  height: 6vh;
  border-radius: 3vh;
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
  border-radius: 20px;
  background-color: #1e2222;
  display: flex;
  overflow: hidden;
}
.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow: scroll;
  padding-right: 8px;
}
.left {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  overflow: scroll;
  padding-right: 8px;
}
.postPage {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 5px;
  display: flex;
}
.right >>> .el-input__inner {
  background-color: #2c3131;
  border: none;
  color: white;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.right .el-button {
  height: 30px;
  margin-left: 10px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  background-color: #154360;
  border: none;
  color: white;
}
</style>