<template>
<div class="easyCkeck">
  <table border="1px" cellspacing="0">
    <colgroup span="7" width="300"></colgroup>
    <!-- <colgroup span="1" width="200"></colgroup> -->
    <tr align="center">
				<th colspan="7">展会简易申报审核</th>
		</tr>
    <tr align="center">
      <td>展会名称</td>
      <td>{{easyForm}}</td>
      <td>展会对应ID</td>
       <td>{{easyForm}}</td> 
    </tr>
    <tr  align="center">
       <td>主办单位</td>
       <td>{{easyForm}}</td>
       <td>举办时间</td>
       <td>{{easyForm}}</td>  
    </tr>
    <tr align="center">
       <td>举办地点</td>
       <td colspan="6">{{easyForm}}</td> 
    </tr>
    <tr align="center">
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

<style scoped lang="scss">
	$top:top;
	$bottom:bottom;
	$left:left;
	$right:right;
	$leftright: ($left, $right);
	$pinkk: #eec2d3;
	$bluee: #409eff;
	$yelloww: #f4d884;
	$grennn: #89dda0;
	$purplee: #78a2ea;
	$lightBluee: #b8d6ff;

	$list: bluee pinkk yelloww grennn purplee lightBluee;
	$list1: $bluee $pinkk $yelloww $grennn $purplee $lightBluee;

	%shadow {
		background: #fff;
		-webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
		box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
		border-color: rgba(0, 0, 0, 0.2);

		.title {
			font-size: 14px;
			padding: 10px;

			i {
				margin-#{$right}: 5px;
			}
		}
	}
	@mixin flex($direction:row, $content:space-between) {
		display: flex;
		flex-direction: $direction;
		justify-content: $content;
	}
  .kindsfont {
		font-size: 20px;
		font-family: 华文细黑;
	}

.easyCkeck{
  color: #666;
}
table {
  font-size: 16px;

}

th {
  font-size: 23px;
}

tr {
  height: 60px;
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
	color: white;	
	padding: 3px 25px;
	display: inline-block;
	border: 1px solid rgba(0,0,0,0.21);
	border-bottom-color: rgba(0,0,0,0.34);
	text-shadow:0 1px 0 rgba(0,0,0,0.15);
	box-shadow: 0 1px 0 rgba(255,255,255,0.34) inset, 
				      0 2px 0 -1px rgba(0,0,0,0.13), 
				      0 3px 0 -1px rgba(0,0,0,0.08), 
				      0 3px 13px -1px rgba(0,0,0,0.21);
}

.reject {
  background-color: #fa5a5a;
	color: white;	
	padding: 3px 25px;
	display: inline-block;
	border: 1px solid rgba(0,0,0,0.21);
	border-bottom-color: rgba(0,0,0,0.34);
	text-shadow:0 1px 0 rgba(0,0,0,0.15);
	box-shadow: 0 1px 0 rgba(255,255,255,0.34) inset, 
				      0 2px 0 -1px rgba(0,0,0,0.13), 
				      0 3px 0 -1px rgba(0,0,0,0.08), 
				      0 3px 13px -1px rgba(0,0,0,0.21);

}




</style>
