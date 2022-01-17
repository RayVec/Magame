<template>
  <div class="main">
    <div class="left">
      <div>
        <div class="type">
          <div class="option-title">类型</div>
          <el-radio v-model="type"
                    :label="1">动态</el-radio>
          <el-radio v-model="type"
                    :label="2">文章</el-radio>
        </div>
        <template v-if="type===1">
          <div class="topic">
            <div class="option-title">话题</div>
            <div class="topic-items">
              <template v-for="(topic,index) of topics">
                <div class="topic-item"
                     :key="index">
                  <el-autocomplete class="inline-input"
                                   v-model="topics[index]"
                                   :fetch-suggestions="querySearch"
                                   placeholder="请输入或搜索话题"
                                   @select="handleSelect"></el-autocomplete>
                  <i v-if="index>0"
                     @click="deleteTopic(index)"
                     class="el-icon-minus minus"></i>
                </div>
              </template>
              <div class="addIcon">
                <i @click="addTopic"
                   class="el-icon-plus"></i>
              </div>
            </div>
          </div>
        </template>
        <template v-if="type===2">
          <div class="topic">
            <div class="option-title">标题</div>
            <el-input type="textarea"
                      autosize
                      placeholder="请输入标题"
                      clearable
                      v-model="title"></el-input>
          </div>
          <div class="topic">
            <div class="option-title">前言</div>
            <el-input type="textarea"
                      autosize
                      placeholder="请输入前言"
                      clearable
                      v-model="intro"></el-input>
          </div>
        </template>
        <div class="time"
             style="margin-bottom:20px">
          <div class="option-title">定时发送</div>
          <el-switch v-model="timeSwitch"
                     active-color="#13ce66"
                     inactive-color="#CACFD2">
          </el-switch>
        </div>
        <div class="time"
             v-if="timeSwitch===true">
          <div class="option-title">发送时间</div>
          <div class="timeSelect">
            <el-date-picker v-model="time1"
                            type="date"
                            placeholder="选择日期">
            </el-date-picker>
            <el-time-picker v-model="time2"
                            placeholder="选择时间">
            </el-time-picker>
          </div>
        </div>
      </div>
      <div class="submit">
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div class="right">
      <template v-if="type===1">
        <div>
          <el-input type="textarea"
                    :autosize="{ minRows: 10, maxRows: 100}"
                    placeholder="请输入内容"
                    v-model="textarea">
          </el-input>
        </div>
        <div class="upload-zone">
          <el-upload action="#"
                     list-type="picture-card"
                     :auto-upload="false">
            <i slot="default"
               class="el-icon-plus"></i>
            <div slot="file"
                 slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail"
                   :src="file.url"
                   alt="">
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                <span v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </div>
      </template>
      <template v-if="type===2">
        <quill-editor ref="text"
                      v-model="content"
                      class="myQuillEditor"
                      :options="editorOption" />

      </template>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor

  },

  mounted () {
    this.restaurants = this.loadAll();

  },

  data () {
    return {
      editorOption: {
        placeholder: '请编辑文章',
        theme: 'snow'
      },
      content: '',
      intro: '',
      title: '',
      //上传
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,

      timeSwitch: false,
      type: 1,
      topics: [''],
      restaurants: [],
      time1: '',
      time2: '',
      textarea: ''
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload (file) {
      console.log(file);
    },
    addTopic () {
      this.topics.push('')
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll () {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
        { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
        { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
        { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
        { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
        { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
        { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
        { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
        { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
        { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
        { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
        { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
        { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
        { "value": "枪会山", "address": "上海市普陀区棕榈路" },
        { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
        { "value": "钱记", "address": "上海市长宁区天山西路" },
        { "value": "壹杯加", "address": "上海市长宁区通协路" },
        { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
        { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
        { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
        { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
        { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
        { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
        { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
        { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
        { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
        { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
        { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
        { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
        { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
        { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
        { "value": "浏阳蒸菜", "address": "天山西路430号" },
        { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
        { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
        { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
        { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
        { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
        { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
        { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
        { "value": "阳阳麻辣烫", "address": "天山西路389号" },
        { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
      ];
    },
    handleSelect (item) {
      console.log(item);
    },
    deleteTopic (index) {
      this.topics.splice(index, 1)
    }
  },

}
</script>

<style scoped>
.main >>> .ql-editor.ql-blank::before {
  color: white;
  font-size: 2.2vh;
  letter-spacing: 3px;
}
.myQuillEditor {
  height: 80%;
}
.left >>> .el-textarea {
  width: 220px;
}
.upload-zone {
  margin-top: 20px;
  text-align: start;
}
.right {
  width: 66.67%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-bottom: 20px;
}
.submit .el-button {
  width: 120px;
}
.submit {
  text-align: center;
  padding-bottom: 20px;
}
.timeSelect >>> .el-date-editor {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.timeSelect {
  display: flex;
  flex-direction: column;
}
.time {
  display: flex;
}
.minus {
  margin-left: 5px;
}
.addIcon {
  display: flex;
  width: 100%;
  justify-content: center;
}
.el-icon-plus:before {
  margin: auto;
}
.main >>> .el-input__inner {
  background-color: #2c3131;
  border: none;
  color: white;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.main >>> .el-textarea__inner {
  background-color: #2c3131;
  border: none;
  color: white;
  width: 100%;
  line-height: 30px;
}
.main >>> .el-upload--picture-card {
  background-color: #2c3131;
}
.topic-item {
  box-sizing: border-box;
  padding: 0 0 10px 0;
}
i:hover {
  cursor: pointer;
}
.topic {
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  /* align-items: center; */
}
.option-title {
  /* display: inline-block; */
  margin-right: 20px;
  width: 10vh;
}
.option-title::after {
  content: ":";
  margin: 0 5px;
}
.type {
  text-align: start;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}
.left {
  width: 33.33%;
  height: 100%;
  overflow-y: scroll;
  font-size: 2vh;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  color: white;
}
</style>