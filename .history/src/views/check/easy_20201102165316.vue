<template>
<div class="easyCkeck">
  <table border="1px" cellspacing="0">
    <colgroup span="7" width="300"></colgroup>
    <!-- <colgroup span="1" width="200"></colgroup> -->
    <tr height="50px" align="center">
				<th colspan="7">展会简易申报审核</th>
		</tr>
    <tr height="50px" align="center">
      <td>展会名称</td>
      <td>{{easyForm}}</td>
      <td>展会对应ID</td>
       <td>{{easyForm}}</td> 
    </tr>
    <tr height="50px" align="center">
       <td>主办单位</td>
       <td>{{easyForm}}</td>
       <td>举办时间</td>
       <td>{{easyForm}}</td>  
    </tr>
    <tr height="50px" align="center">
       <td>举办地点</td>
       <td colspan="6">{{easyForm}}</td> 
    </tr>
    <tr height="50px" align="center">
       <td>备注</td>
       <td colspan="6">{{easyForm}}</td> 
    </tr>
  </table>
  <br/>
<div class="check">
  <button class="pass">审核通过</button>
  <button class="reject">返回修改</button>
</div>
</div>

</template>

<script>
import { getEasyFormdata } from "../../network/easyCheck"
export default {
  name: "easy",
  data(){
    return{
      easyForm: {}

    }
  },
  created(){
    getEasyFormdata().then(res => {
      this.easyForm = res
    })

  },

}
</script>

<style scoped>

table {
  font-size: 16px;

}

th {
  font-size: 23px;
}

.check {
  display: flex;
  justify-content: space-around;

  
  
}
.pass,.reject  {
  width: 120px;
  height: 40px;
  border-radius: 30px;

  
}
.pass{
  background-color:  #82c8a0;;
}

.reject {
  background-color: #fa5a5a;

}


</style>
