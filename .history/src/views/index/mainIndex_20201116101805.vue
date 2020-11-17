<template>
  <div>
<el-row :gutter='20'>

      <el-col :span='12'>
        <div class="card bbxx">
          <p class="title"><i class="fa fa-th-large fa-lg"></i>待审核的申报</p >
          <div style="padding-bottom: 35px; text-align: center">
            <p class="notice">需要审核的简易申报共有<span style="color: #bd2c00">&nbsp;{{easyNum}}&nbsp;</span>件</p >
            <p class="notice">需要审核的详细申报共有<span style="color: #bd2c00">&nbsp;{{detailNum}}&nbsp;</span>件</p >
          </div>
        </div>
      </el-col>

      <el-col :span='12'>
        <div style="width: 340px">
          <div class="card kjfs">
            <p class="title"><i class="fa fa-th-large fa-lg"></i>快捷方式</p >

            <ul>
              <li><router-link to="/detail" class="kjfs kjfs-grennn"><span><i class="fa fa-wpforms fa-2x"></i></span><span>详细申报审核</span></router-link></li>
              <li><router-link to="/easy" class="kjfs kjfs-pinkk"><span><i class="fa fa-leanpub fa-2x"></i></span><span>简易申报审核</span></router-link></li>
            </ul>
            <ul>
              <li><router-link to="/register" class="kjfs kjfs-purplee"><span><i class="fa fa-address-card-o fa-2x"></i></span><span>注册审核</span></router-link></li>
              <li  v-on:click="logout"><router-link to="/" class="kjfs kjfs-lightBluee"><span><i class="fa fa-sign-out fa-2x"></i></span><span>退出系统</span></router-link></li>
            </ul>
          </div>
        </div>
      </el-col>

    </el-row>


  </div>
</template>

<script>
import LineEcharts from "../../components/ECharts/lineEcharts"
import Cookies from "js-cookie";

export default {
  name: "mainIndex",
  components: {LineEcharts},
  mounted () {
    this.selfAdaption()
  },
  data(){
    return{
      imgUrl:require("../../assets/photo.jpeg"),

      efcheck : false,

    }
  },

  created() {
this.$axios
      .post('/message/easyNum', {

      })
      .then(successResponse => {
        if (successResponse.data.code === 0) {
          this.easyNum = successResponse.data.data
        }
        else {
          this.$message({
            showClose: true,
            message: "系统错误！",
            type: "error"
          })
        }
      })
      .catch(failResponse => {
      })

    this.$axios
      .post('/message/detailNum', {

      })
      .then(successResponse => {
        if (successResponse.data.code === 0) {
          this.detailNum = successResponse.data.data
        }
        else {
          this.$message({
            showClose: true,
            message: "系统错误！",
            type: "error"
          })
        }
      })
      .catch(failResponse => {
      })


  },

  destroyed() {

  },


  methods: {

    logout() {

      Cookies.remove("token")
      Cookies.remove("face")
      location.reload()

    },

    // echart自适应
    selfAdaption () {
      let that = this
      setTimeout(() => {
        window.onresize = function () {
          if (that.$refs.echarts) {
            that.$refs.echarts.chart.resize()
          }
        }
      }, 10)
    }

  }
}
</script>

<style lang="scss">
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
  %shadow{
    background: #fff;
    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
    .title{
      font-size: 14px;
      padding: 10px;
      i{
        margin-#{$right}: 5px;
      }
    }
  }

  @mixin flex($direction:row,$content:space-between){
    display: flex;
    flex-direction: $direction;
    justify-content: $content;
  }

  .photo{
    height: 200px;
    padding: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card{
    color: #666;
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
  #lineEcharts{
    margin-#{$top}: 30px;
    padding-#{$top}: 30px;
    @extend %shadow;
  }
  #maintable{
    margin-#{$top}: 30px;
    padding-#{$top}: 10px;
    @extend %shadow;
  }
  .notice{
    margin-right: 15px;

    font-size: 26px;
    line-height: 110px;
    height: 110px;

  }
</style>
