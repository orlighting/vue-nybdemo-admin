<!--  -->
<template>
<div class='easyCheckList'>
    <bea-table :data="blob" :nextPath="nextPath"></bea-table>
    <!-- <easy-check-item v-for="(item,index) in easyForm" :key="index" :item="item"/> -->
     <!-- <easy-check-item />
     <easy-check-item />
     <easy-check-item /> -->


</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getdetailFormdata } from "../../../network/detailCheck"
import beaTable from "../../../components/table"
export default {
//import引入的组件需要注入到对象中才能使用
components: {

    beaTable
},
data() {
//这里存放数据
return {
    // isshow: true,
    detailForm: [],
    nextPath: "/detailCheck/",

};
},
//监听属性 类似于data概念
computed: {

},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    getdetailFormdata().then(res => {
        // console.log(res)
    //   this.detailForm = res.data
    var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
    // var contentDisposition = res.headers['content-disposition']; //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
    var patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");

var result = patt.exec();

var filename = result[1];

var downloadElement = document.createElement('a');

var href = window.URL.createObjectURL(blob); //创建下载的链接

var reg = /^["](.*)["]$/g;

downloadElement.style.display = 'none';

downloadElement.href = href;

downloadElement.download = decodeURI(filename.replace(reg,"$1")); //下载后文件名

document.body.appendChild(downloadElement);

downloadElement.click(); //点击下载

document.body.removeChild(downloadElement); //下载完成移除元素

window.URL.revokeObjectURL(href); //释放掉blob对象

    for(let item of this.detailForm){
        item.checkState = item.checkState == 0 ? '待审核': '已通过，展会计划待过会'
      }

    })
    

    

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.morenzanshi{
    height: 100px;
    width: 200px;
    color: grey;


}
</style>