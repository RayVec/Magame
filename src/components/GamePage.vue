<template>
  <div class="main-carousel">
    <div @click="shadeClick()"
         v-if="postDialogVisible||articleDialogVisible||commentDialogVisible"
         class="shade"></div>
    <div v-if="postDialogVisible"
         class="popup">
      <post-page></post-page>
    </div>
    <div v-if="articleDialogVisible"
         class="popup">
      <article-page></article-page>
    </div>
    <div v-if="commentDialogVisible"
         class="popup">
      <div class="game-comment-item">
        <div class="game-comment-head">
          <div style="display:flex;align-items:center;">
            <img class="article-headPhoto"
                 :src="require('@/assets/thirdScreen/80hou.jpg')">
            <div class="game-comment-author">大平行宇宙</div>
          </div>

          <div class="game-comment-time">
            2021-01-22 12:30:11
          </div>
        </div>
        <div class="game-comment-text">
          <div class="game-comment-text-text">
            10200通关繁中NS第一次因为一款游戏去买一台掌机.....而事实证明：这，是值得的！丰富的游戏内容，良好的游戏体验，这难道还不够当你回忆起......：
            - 第一次从初试台地的洞口出来，看到那唯美的世界风景时的震撼！
            - 第一次因为不小心从塔上掉下来时的心惊！
            - 第一次从老爷爷手里拿到滑翔帆时的开心！
            - 第一次看到米法小姐姐剧情时的感动！
            - 第一次成功打倒第一只神兽时的振奋！
            - 第一次拿到大师剑时的激动！
            ........
            - 以及最后一次打倒加农之后结束游戏时的依依不舍......
            或许这就是一款好游戏的样子，他也许不会让你顿悟出什么了不起的人生哲理，但他会让你因为它开心，因为他激动，因为他害怕，因为它悲伤，因为他......依依不舍，不是吗！？

            ps:我很少把switch当主机玩过......(˶‾᷄ ⁻̫ ‾᷅˵)
          </div>
        </div>
        <el-rate :value="4.9"
                 disabled
                 show-score
                 text-color="#ff9900"
                 score-template="{value}"></el-rate>
      </div>
    </div>

    <el-dialog :class="dialogClass"
               :visible.sync="topicDialogVisible"
               :modal-append-to-body="true"
               :before-close="handleClose">
      <topic-page v-if="topicDialogVisible" />
    </el-dialog>

    <el-dialog :class="dialogClass"
               :visible.sync="newPostDialogVisible"
               :modal-append-to-body="true"
               :before-close="handleClose">
      <new-post v-if="newPostDialogVisible" />
      <post-page></post-page>
    </el-dialog>
    <swiper style="width:100%;height:100%"
            :options="swiperOptions">
      <div class="swiper-pagination"
           slot="pagination"></div>
      <swiper-slide style="width:100%">
        <div class="gamePage">
          <div class="left-zone">
            <div class="game-title">塞尔达传说：旷野之息</div>
            <div class="game-imgs">
              <el-carousel class="game-img-carousel"
                           ref="gameImgCarousel"
                           @change="gameImgChange"
                           :interval="4000"
                           direction="vertical">
                <el-carousel-item v-for="(gameImg,index) in gameImgs"
                                  :key="index">
                  <img class="game-img"
                       :src="gameImg">
                </el-carousel-item>

              </el-carousel>
              <div v-if="gameImgThumbnailView"
                   class="game-imgs-thumbnail">
                <template v-for="(gameImg,index) in gameImgs">
                  <img :key="index"
                       :src="gameImg"
                       @click="gameImgThumbnailClick(index)"
                       :class="gameImgThumbnailClass(index)">
                </template>
              </div>

            </div>
            <div class="game-info">
              <div class="game-info-title">基本信息</div>
              <div class="game-info-crest">
                <template v-for="(info,index) in infos">
                  <div v-if="info.title==='标签'"
                       :key="index"
                       class="game-info-item1">
                    <div class="game-info-item-title">{{info.title}}</div>
                    <div class="game-info-item-tags">
                      <el-tag class="game-info-tag"
                              v-for="tag in info.content"
                              type="info"
                              :key="tag">{{tag}}</el-tag>
                    </div>
                  </div>
                  <div v-else
                       :key="index"
                       class="game-info-item">
                    <div class="game-info-item-title">{{info.title}}</div>
                    <div class="game-info-item-content"
                         v-if="info.title==='评分'">
                      <el-rate :value="info.content"
                               disabled
                               show-score
                               text-color="#ff9900"
                               score-template="{value}">
                      </el-rate>
                    </div>
                    <div v-else
                         class="game-info-item-content">{{info.content}}</div>
                  </div>
                </template>

              </div>

            </div>
            <div class="game-brief">
              <div class="game-brief-title">导语</div>
              <div class="game-brief-crest">
                《旷野之息》将像它的那些前辈一样，成为了电子游戏发展史的又一个里程碑。它会为未来数年甚至十几年的游戏开发者带去无数的灵感，会被下一代的很多游戏“致敬”。
              </div>
            </div>
          </div>
          <div class="right-zone">
            <div class="game-intro">
              <div class="game-intro-title">游戏介绍</div>
              <div class="game-intro-crest">《塞尔达传说》系列首部登陆任天堂Switch主机的作品，本作也是系列第一款开放世界作品，玩家可以脱出此前的各种限制，在广阔的世界中自由探索。

                游戏故事依然是林克拯救世界的故事，海拉尔大陆再次被加农侵袭，林克从长眠中醒来，在冒险中获得武器、能力，最后去挑战加农。但你也可以直接去干掉加农，本作的自由度是系列前所未有的。

                在《塞尔达传说 旷野之息》中，林克从一开始就获得了所有道具能力，并且可以和世界中的各种要素进行互动。大自然的风火雷电都可以被利用，让林克的冒险有层出不穷的玩法。

                本作中文版将于2018年2月1日推出，中文版标题确认为《塞尔达传说：旷野之息》。</div>
            </div>
            <div class="game-news">
              <div class="game-news-title">相关资讯</div>
              <div class="game-news-crest">
                <div v-for="(content,index) in contents"
                     :key="index"
                     class="game-news-article">
                  <div @click="openArticle"
                       class="game-news-article-base">
                    <img class="article-img"
                         :src="content.url">
                    <div class="article-hover"></div>
                    <div class="article-info">
                      <div class="article-title">{{content.title}}</div>
                      <div class="article-data">
                        <img class="article-headPhoto"
                             :src="content.headPhoto">
                        <div class="article-data-right">
                          <div class="article-author">{{content.author}}</div>
                          <div class="article-data-part">
                            <div class="article-date">{{content.date}}</div>
                            <div class="article-data-item">
                              <i class="el-icon-chat-line-round"></i>
                              <div class="article-comment">{{content.comment}}</div>
                            </div>
                            <div class="article-data-item">
                              <i class="el-icon-view"></i>
                              <div class="article-read">{{content.read}}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="gamePage">
          <div class="left-zone">
            <div class="game-comment-title">评论</div>
            <div class="game-comment">
              <div v-for="i in 6"
                   :key="i"
                   class="game-comment-crest">
                <div @click="openComment()"
                     class="game-comment-item">
                  <div class="game-comment-head">
                    <div style="display:flex;align-items:center;">
                      <img class="article-headPhoto"
                           :src="require('@/assets/thirdScreen/80hou.jpg')">
                      <div class="game-comment-author">大平行宇宙</div>
                    </div>

                    <div class="game-comment-time">
                      2021-01-22 12:30:11
                    </div>
                  </div>
                  <div class="game-comment-text">
                    <div class="game-comment-text-text">
                      10200通关繁中NS第一次因为一款游戏去买一台掌机.....而事实证明：这，是值得的！丰富的游戏内容，良好的游戏体验，这难道还不够当你回忆起......：
                      - 第一次从初试台地的洞口出来，看到那唯美的世界风景时的震撼！
                      - 第一次因为不小心从塔上掉下来时的心惊！
                      - 第一次从老爷爷手里拿到滑翔帆时的开心！
                      - 第一次看到米法小姐姐剧情时的感动！
                      - 第一次成功打倒第一只神兽时的振奋！
                      - 第一次拿到大师剑时的激动！
                      ........
                      - 以及最后一次打倒加农之后结束游戏时的依依不舍......
                      或许这就是一款好游戏的样子，他也许不会让你顿悟出什么了不起的人生哲理，但他会让你因为它开心，因为他激动，因为他害怕，因为它悲伤，因为他......依依不舍，不是吗！？

                      ps:我很少把switch当主机玩过......(˶‾᷄ ⁻̫ ‾᷅˵)
                    </div>
                  </div>
                  <el-rate :value="4.9"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}"></el-rate>
                </div>
              </div>
            </div>
          </div>
          <div class="right-zone">
            <div class="game-comment-title">#塞尔达荒野之息</div>
            <div class="game-comment">
              <div class="game-comment-crest"
                   v-for="(item, index) in posts"
                   :key="index">
                <post-content @click.native="openPost()"
                              :content="item" />
              </div>

            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import PostContent from './PostContent.vue'
import articlePage from './ArticlePage.vue'
import topicPage from './TopicPage.vue'
import postPage from './PostPage.vue'
import newPost from './NewPost.vue'
export default {
  components: {
    PostContent,
    topicPage,
    articlePage,
    postPage,
    newPost
  },
  data () {
    return {
      articleDialogVisible: false,
      topicDialogVisible: false,
      postDialogVisible: false,
      newPostDialogVisible: false,
      commentDialogVisible: false,
      // 配置参数
      swiperOptions: {
        // 分页器
        pagination: {
          el: '.swiper-pagination',   // 分页器元素
          clickable: true   // 点击分页器切换
        },
        // Some Swiper option/callback...
      },
      posts: [
        {
          type: 2,
          text: '吃完这碗面，出发去vg。哈哈哈，想想都很期待，阿罗，六爷，第一次见真人啊。',
          imgs: [require('@/assets/thirdScreen/post1.jpg'), require('@/assets/thirdScreen/post2.jpg')],
          read: 2323,
          comment: 24,
          date: '2021-12-18 21:55:35',
          author: '曹孟德斯鸠',
          headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
        },
        {
          type: 2,
          text: '由于短期内感觉也等不到PS5降价了，预算内想买一个Oculus Quest 2，但是我是一个纯纯的电脑白痴，想问问大家这个东西运作起来起来麻烦吗？手上有一台多年前的台式机和一台多年前的笔记本电脑。可以用这个设备吗？然后现在买合适吗，是快过时了还是正当年？购买这个设备有什么需要注意的吗？直接在淘宝买就可以了吗，配套款式有什么需要注意的？谢谢大佬们！',
          imgs: [require('@/assets/thirdScreen/post3.jpg'), require('@/assets/thirdScreen/post4.jpg'), require('@/assets/thirdScreen/post5.jpg')],
          read: 2323,
          comment: 24,
          date: '2021-12-18 21:55:35',
          author: '曹孟德斯鸠',
          headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
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
          text: '吃完这碗面，出发去vg。哈哈哈，想想都很期待，阿罗，六爷，第一次见真人啊。',
          imgs: [require('@/assets/thirdScreen/post1.jpg'), require('@/assets/thirdScreen/post2.jpg')],
          read: 2323,
          comment: 24,
          date: '2021-12-18 21:55:35',
          author: '曹孟德斯鸠',
          headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
        }, {
          type: 2,
          text: '吃完这碗面，出发去vg。哈哈哈，想想都很期待，阿罗，六爷，第一次见真人啊。',
          imgs: [require('@/assets/thirdScreen/post1.jpg'), require('@/assets/thirdScreen/post2.jpg')],
          read: 2323,
          comment: 24,
          date: '2021-12-18 21:55:35',
          author: '曹孟德斯鸠',
          headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
        },
        {
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
          text: '吃完这碗面，出发去vg。哈哈哈，想想都很期待，阿罗，六爷，第一次见真人啊。',
          imgs: [require('@/assets/thirdScreen/post1.jpg'), require('@/assets/thirdScreen/post2.jpg')],
          read: 2323,
          comment: 24,
          date: '2021-12-18 21:55:35',
          author: '曹孟德斯鸠',
          headPhoto: require('@/assets/thirdScreen/caomengdesijiu.jpg')
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
        }, {
          type: 1,
          title: '《塞尔达传说：荒野之息》评测：电子游戏又一座里程碑',
          url: require('@/assets/gamePage/zelda6.jpg'),
          read: 2323,
          comment: 24,
          date: '2021-12-18',
          author: '80后写稿佬',
          headPhoto: require('@/assets/thirdScreen/80hou.jpg')
        }, {
          type: 1,
          title: '五万人投出来的游戏史上百强，第一名是「旷野之息」！',
          url: require('@/assets/gamePage/zelda7.jpg'),
          read: 2323,
          comment: 24,
          date: '2021-12-18',
          author: '苏活',
          headPhoto: require('@/assets/gamePage/suhuo.png')
        }
      ],
      infos: [
        {
          title: '游戏平台',
          content: 'NS, WiiU'
        },
        {
          title: '发售时间',
          content: '2017-03-03'
        },
        {
          title: '支持中文',
          content: '是'
        },
        {
          title: '开发商',
          content: 'Nintendo'
        },
        {
          title: '发行商',
          content: 'Nintendo'
        },
        {
          title: '评分',
          content: 4.9
        },
        {
          title: '标签',
          content: ['动作', '沙盒', '冒险']
        }
      ],
      gameImgs: [
        require('@/assets/gamePage/zelda1.jpg'),
        require('@/assets/gamePage/zelda2.jpg'),
        require('@/assets/gamePage/zelda3.jpg'),
        require('@/assets/gamePage/zelda4.jpg'),
        require('@/assets/gamePage/zelda5.jpg')
      ],
      activeImgIndex: 0,
      gameImgThumbnailView: true
    }
  },
  updated () {
    // 设置评论的行数
    this.setCommentRow()
  },
  mounted () {
    this.setCommentRow()
  },
  methods: {
    shadeClick () {
      this.postDialogVisible = false
      this.articleDialogVisible = false
      this.commentDialogVisible = false
      //设置弹窗的尺寸
      let gamePages = document.getElementsByClassName('gamePage')
      // eslint-disable-next-line no-debugger
      // debugger
      for (let gamePage of gamePages) {
        gamePage.style.filter = ''
      }
    },
    openNewPost () {
      //设置弹窗的尺寸

      this.newPostDialogVisible = true
    },
    openComment () {
      //设置弹窗的尺寸
      let gamePages = document.getElementsByClassName('gamePage')
      // eslint-disable-next-line no-debugger
      // debugger
      for (let gamePage of gamePages) {
        gamePage.style.filter = 'blur(10px)'
      }
      this.commentDialogVisible = true
    },
    openPost () {

      let gamePages = document.getElementsByClassName('gamePage')
      // eslint-disable-next-line no-debugger
      // debugger
      for (let gamePage of gamePages) {
        gamePage.style.filter = 'blur(10px)'
      }
      this.postDialogVisible = true
    },
    openTopic () {
      //设置弹窗的尺寸


      this.topicDialogVisible = true
    },
    openArticle () {
      let gamePages = document.getElementsByClassName('gamePage')
      // eslint-disable-next-line no-debugger
      // debugger
      for (let gamePage of gamePages) {
        gamePage.style.filter = 'blur(8px)'
        // gamePage.style.boxShadow = '50px 50px 50px 50px #212121 inset'
      }
      this.articleDialogVisible = true
    },
    setCommentRow () {
      let text = document.getElementsByClassName('game-comment-text')[0]
      let style = window.getComputedStyle(text, null)
      let height = style.height.replace('px', '')
      let lineHeight = style.lineHeight.replace('px', '')
      let row = Math.floor(height / lineHeight)

      let items = document.getElementsByClassName('game-comment-text-text')
      for (let item of items) {
        item.setAttribute('style', '-webkit-line-clamp: ' + row)

      }
    },
    swiperleft: function () {
      this.$refs.carousel.next()

    },
    swiperright: function () {
      this.$refs.carousel.prev()

    },
    gameImgThumbnailClass (index) {
      if (index === this.activeImgIndex) {
        return 'game-imgs-thumbnail-img game-imgs-thumbnail-img-active'
      }
      else {
        return 'game-imgs-thumbnail-img'
      }
    },
    gameImgChange (nowIndex) {
      this.activeImgIndex = nowIndex
      this.gameImgThumbnailView = false
      this.gameImgThumbnailView = true
    },
    gameImgThumbnailClick (index) {
      this.$refs.gameImgCarousel.setActiveItem(index)
      this.activeImgIndex = index
    }
  }

}
</script>

<style scoped>
.popup >>> .game-comment-item {
  background-color: unset;
  justify-content: start;
  overflow-y: auto;
}
.popup >>> .game-comment-head {
  font-size: 1.8vh;
}
.popup >>> .game-comment-author {
  font-size: 2vh;
}
.popup >>> .game-comment-item:hover {
  animation: unset;
  cursor: unset;
}
.popup >>> .game-comment-text {
  flex: unset;
  height: auto;
  font-size: 1.8vh;
  line-height: 2.8vh;
  text-align: start;
}
.popup >>> .el-rate {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.popup {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
  z-index: 3;
  background-color: #212121;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 20px;
}
.shade {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  z-index: 2;
}
.main-carousel >>> .swiper-pagination-bullet {
  background-color: #ebebeb;
}
.main-carousel >>> .swiper-pagination-bullet-active {
  background-color: white;
}
.game-comment-crest >>> .content:hover {
  animation: expand 1s;
  cursor: pointer;
}
.game-comment-crest >>> .content {
  background-color: #424242;
}
.game-comment-text-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
}
.game-comment-text {
  box-sizing: border-box;
  padding: 3% 0;
  flex: 1;
  height: 0;
  font-size: 1.6vh;
  line-height: 2.5vh;
  width: 100%;
  color: white;
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
}
.game-comment-time {
  color: #d0d3d4;
}
.game-comment-author {
  margin-left: 10px;
  font-size: 1.7vh;
}
.game-comment-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.4vh;
}
.game-comment-item:hover {
  animation: expand 1s;
  cursor: pointer;
}
.game-comment-item {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px 8px;
  background-color: #424242;
  border-radius: 15px;
}

.game-comment-crest {
  width: 50%;
  height: 33.33%;
  box-sizing: border-box;
  padding: 8px 16px 8px 16px;
  /* overflow: hidden; */
}
.game-comment {
  flex: 1;
  height: 0;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: visible;
}
.game-comment-title {
  color: white;
  font-size: 2.3vh;
  margin-bottom: 5px;
  padding-left: 16px;
}
.el-carousel {
  width: 100%;
  height: 100%;
}

.main-carousel >>> .el-carousel__item {
  box-sizing: border-box;
  padding-bottom: 30px !important;
}
.main-carousel {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
}
.el-carousel >>> .el-carousel__container {
  width: 100%;
  height: 100% !important;
}
.article-data-item {
  display: flex;
  align-items: center;
}
.article-data-part {
  display: flex;
  justify-content: space-between;
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
.article-data-right {
  flex: 1;
  width: 0;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.article-data {
  padding: 5px 0;
  height: 4vh;
  display: flex;
  align-items: center;
  color: #d0d3d4;
  font-size: 1.4vh;
  justify-content: flex-start;
}
.article-headPhoto {
  width: 3.5vh;
  height: 3.5vh;
  border-radius: 1.75vh;
}
.article-hover {
  position: absolute;
  top: 1px;
  left: 0px;
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
  border-radius: 15px;
}
.article-title {
  font-size: 2vh;
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
.game-news-article-base:hover {
  animation: expand 1s;
}

.game-news-article-base {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
}
.article-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.game-news-article {
  width: 49%;
  height: auto;
  aspect-ratio: 16/9;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: #1e2222;
  display: flex;
  overflow: hidden;
}
.game-news-title {
  color: white;
  font-size: 2.3vh;
  margin-bottom: 5px;
}
.game-news-crest {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.game-news {
  margin-top: 5px;
}
.game-intro-crest {
  flex: 1;
  height: 0;
  border-radius: 15px;
  background-color: #424242;
  box-sizing: border-box;
  padding: 15px;
  flex-wrap: wrap;
  color: white;
  overflow-y: scroll;
  font-size: 1.8vh;
  line-height: 2vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
}
.game-intro-title {
  color: white;
  font-size: 2.3vh;
  margin-bottom: 5px;
}
.game-intro {
  display: flex;
  flex-direction: column;
}
.right-zone {
  box-sizing: border-box;
  padding-right: 5px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.game-brief-crest {
  flex: 1;
  height: 0;
  border-radius: 15px;
  background-color: #424242;
  box-sizing: border-box;
  padding: 15px;
  flex-wrap: wrap;
  color: white;
  overflow-y: scroll;
  font-size: 1.8vh;
  line-height: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game-brief-title {
  color: white;
  font-size: 2.3vh;
  margin-top: 10px;
  margin-bottom: 5px;
}
.game-brief {
  flex: 1;
  height: 0;
  display: flex;
  flex-direction: column;
}
.game-info-item-tags >>> .el-tag {
  height: 2.8vh;
  line-height: 2.7vh;
  color: black;
  font-size: 1.2vh;
}
.game-info-tag {
  margin: 0 3%;
}
.game-info-item-tags {
  color: white;
  font-size: 1.8vh;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game-info-item >>> .el-rate__text {
  margin-left: 0.15vw !important;
}
.game-info-item >>> .el-rate__icon {
  margin-right: 0.1vw !important;
}
.game-info-item-content {
  color: white;
  font-size: 1.8vh;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game-info-item1 {
  width: 50%;
  height: 50%;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.game-info-item {
  width: 25%;
  height: 50%;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.game-info-item-title {
  color: #bdbdbd;
  font-size: 1.4vh;
}
.game-info-crest {
  flex: 1;
  height: 0;
  display: flex;
  border-radius: 15px;
  background-color: #424242;
  padding: 10px;
  flex-wrap: wrap;
}
.game-info-title {
  color: white;
  font-size: 2.3vh;
  margin-bottom: 5px;
}
.game-info {
  padding-top: 10px;
  height: 25%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.game-imgs >>> .el-carousel__item {
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  padding-bottom: 0 !important;
}
/* .game-imgs-thumbnail-img:hover {
  border: 1px solid white;
  filter: brightness(100%);
} */

.game-imgs-thumbnail-img {
  border-radius: 15px;
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-bottom: 10px;
  cursor: pointer;
  filter: brightness(75%);
}
.game-imgs-thumbnail-img-active {
  border: 1px solid white;
  filter: brightness(100%);
}
.game-imgs-thumbnail {
  flex: 1;
  width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 10px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.game-imgs >>> .el-carousel__container {
  width: 100%;
  height: 100%;
}
/* .game-imgs >>> .el-carousel {
  width: auto;
  height: 100%;
  aspect-ratio: 16/9;
} */
.game-imgs >>> .el-carousel--vertical {
  width: 75%;
  height: 100%;
  /* aspect-ratio: 16/9; */
  overflow: hidden;
}
.game-img {
  border-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.game-imgs {
  display: flex;
  flex-direction: row;
  height: 40%;
  /* border-radius: 15px; */
  overflow-x: hidden;
}
.game-title {
  text-align: start;
  color: white;
  font-size: 3vh;
  margin-bottom: 10px;
}
.left-zone {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 0;
  overflow-y: auto;
  overflow-x: visible;
}
.gamePage {
  text-align: start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  /* padding-bottom: 30px; */
  padding: 10px 10px 30px 10px;
  position: relative;
  border-radius: 15px;
}
</style>