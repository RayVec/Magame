<template>
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
          <div></div>
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
</template>

<script>
export default {
  props: {
    content: {}
  }

}
</script>

<style scoped>
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
  cursor: pointer;
}
</style>