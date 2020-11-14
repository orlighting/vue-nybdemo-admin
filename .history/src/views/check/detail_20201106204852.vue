<template>
<div class="detailCkeck">
  <div class="card kjfs">
  <table cellspacing="0">
    <colgroup span="7" width="200"></colgroup>
    <!-- <colgroup span="1" width="200"></colgroup> -->
    <tr align="center">
				<th colspan="7">展会详细申报审核</th>
		</tr>
    <tr align="center">
      <td>展会名称</td>
      <td colspan="6">{{detailForm.name}}</td>
    </tr>
    <tr  align="center">
       <td>主办单位</td>
       <td>{{detailForm.fondcomp}}</td>
       <td>承办单位</td>
       <td>{{detailForm.time}}</td>  
    </tr>
    <tr align="center">
       <td>批准单位</td>
       <td >{{detailForm.authobj}}</td> 
       <td>批准文号</td>
       <td >{{detailForm.authnum}}</td>       
    </tr>
    <tr align="center">
       <td>举办地点</td>
       <td >{{detailForm.hostpls}}</td> 
       <td>举办面积</td>
       <td >{{detailForm.hostarea}}</td>       
    </tr>
    <tr align="center">
       <td>举办时间</td>
       <td >{{detailForm.hosttime}}</td> 
       <td>举办周期</td>
       <td >{{detailForm.hostcrlc}}</td>       
    </tr>
    <tr align="center">
       <td>参展商来源</td>
       <td >国内{{detailForm.expofrom1}} 海外{{detailForm.expofrom2}}</td> 
       <td>观众构成</td>
       <td >参展商<span>{{detailForm.hostcrlc}}</span> 消费者<span>{{detail}}</span></td>       
    </tr>
    <tr align="center">
       <td>展会内容</td>
       <td colspan="6">{{detailForm.expocont}}</td> 
    </tr>
    <tr align="center">
       <td>经费来源</td>
       <td colspan="6">财政资金：<span>{{detailForm.finanfond}}</span>  其他资金<span>{{detailForm.otherfrom}}</span> </td> 
    </tr>
    <tr align="center">
       <td>领导出席情况</td>
       <td colspan="6">是否邀请党和国家领导人出席：<span>{{detailForm.leaderN}} </span> 是否邀请境外部级以上政要出席：<span>{{detailForm.leaderF}}</span></td> 
    </tr>
    <tr align="center">
       <td>参会活动内容简述</td>
       <td colspan="6"></td> 
    </tr>
  </table>
  <br/>
<div class="check">
  <button class="pass" @click="check">审核通过</button>
  <button class="reject" @click="reject">返回修改</button>
</div>
  </div>
</div>

</template>

<script>
import { getdetailFormdata } from "../../network/detailCheck"
export default {
  name: "detail",
  data(){
    return{
      detailForm: {}

    }
  },
  created(){
    getdetailFormdata().then(res => {
      this.detailForm = res
    })

  },
  method: {
    check(){
      this.$axios
        .post('/checkdetail', {
          id: this.detailForm.id,
          checkState: true

        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {

          } else {
            this.$message({
              showClose: true,
              message: "提交失败！",
              type: "error"
            })
          }
        })
        .catch(failResponse => {})
      history.go(-1)
      

    },
    reject(){
      this.$axios
        .post('/checkdetail', {
          id: this.detailForm.id,
          checkState: false

        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {

          } else {
            this.$message({
              showClose: true,
              message: "提交失败！",
              type: "error"
            })
          }
        })
        .catch(failResponse => {})

    }
  }

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

.detailCkeck{
  color: #666;
}
table {
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);

}

th {
  font-size: 20px;

}

tr {
  height: 45px;
  
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

  .card{
    color: #666;
    padding: 10px 20px;
    @extend %shadow;

    ul{
      @include flex;
      li{
        flex: 1;
        a{
          color: #666666;
          align-items:center;
          padding-#{$top}: 20px;
          padding-#{$bottom}: 20px;
          @include flex(column);
          span{
            height: 44px;
          }
          .num{
            line-height: 44px;
            font-size: 42px;
            color: $bluee;
            margin: 0px;
          }
        }
        .kjfs-bluee{
          color: $bluee;
        }
        .kjfs-pinkk{
          color: $pinkk;
        }
        .kjfs-yelloww{
          color: $yelloww;
        }
        .kjfs-grennn{
          color: $grennn;
        }
        .kjfs-purplee{
          color: $purplee;
        }
        .kjfs-lightBluee{
          color: $lightBluee;
        }
        &:hover{
          .kjfs-bluee{
            color: #ffffff;
            background: $bluee;
          }
          .kjfs-pinkk{
            color: #ffffff;
            background: $pinkk;
          }
          .kjfs-yelloww{
            color: #ffffff;
            background: $yelloww;
          }
          .kjfs-grennn{
            color: #ffffff;
            background: $grennn;
          }
          .kjfs-purplee{
            color: #ffffff;
            background: $purplee;
          }
          .kjfs-lightBluee{
            color: #ffffff;
            background: $lightBluee;
          }
        }
      }
    }
    .table{
      padding: 21px;
      p{
        height: 52px;
        line-height: 52px;
        border: 1px solid #cccccc;
        overflow: hidden;
        border-#{$top}: none;
        @include flex( null,start);
        &:first-child{
          border-#{$top}: 1px solid #cccccc;
        }
        span{
        }
        .tit{
          width: 180px;
          min-width: 180px;
          height: 100%;
          text-align: center;
          border-#{$right}: 1px solid #cccccc;
          margin-#{$right}: 18px;
        }
        span.gitbox{
          flex: 1;
          height: 100%;
          overflow: hidden;
          @include flex(row,start);
          a{
            &:first-child{
              margin-#{$right}: 30px;
            }
          }
        }
      }
    }
  }


</style>
