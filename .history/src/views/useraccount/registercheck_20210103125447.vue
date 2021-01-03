<template>
<div class='register'>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="展会名称:">
    <el-input v-model="formInline.name" placeholder="展会名称"></el-input>
  </el-form-item>
  <el-form-item label="展会简称:">
    <el-input v-model="formInline.abbreviation" placeholder="展会首字母小写"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">添加</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import {addUser} from '../../network/addUser';
  export default {
    data() {
      return {
        formInline: {
          name: '',
          abbreviation: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        addUser(this.formInline.name, this.formInline.abbreviation){res => {
          
        }}
      }
    }
  }
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.register{
  background-color: #ffffff;
  height: 100%;
  padding: 25PX;
}
</style>