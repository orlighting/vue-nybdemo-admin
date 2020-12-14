<template>
  <div>
    <div class="card bbxx" style="width: 1000px">
      <div class="chartUser">
        <!-- //send用于管理员给用户发送相关消息 -->
        <el-form
          :model="sendMsg"
          status-icon
          label-width="30px"
          class="demo-ruleForm"
          style="padding-right: 30px"
        >
          <!--<div class="helpinfo">
                     内部可以放一些使用指导
                </div> -->

          <el-form-item style="margin-top: 20px">
            <label>接收人ID</label>
            <el-input
              type="number"
              oninput="if(value.length > 9) value = value.slice(0,9)"
              ref="receiveid"
              v-model="sendMsg.receiveid"
              auto-complete="off"
              placeholder="例：2020091234"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <label>消息标题</label>
            <el-input
              type="text"
              ref="msgtitle"
              v-model="sendMsg.msgtitle"
              auto-complete="off"
              placeholder="请输入消息标题"
            ></el-input>
          </el-form-item>

          <el-form-item style="padding-bottom: 30px">
            <label>消息内容</label>
            <el-input
              type="textarea"
              ref="msgtext"
              v-model="sendMsg.msgtext"
              auto-complete="off"
              placeholder="请输入消息内容……"
              :rows="12"
            ></el-input>
          </el-form-item>

          <el-form-item style="padding-bottom: 30px; padding-right: 30px">
            <el-button class="subBtn" type="primary" v-on:click="sendMsged"
              >发送</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'http';
import { getUserId, send} from '../../network/sendMessage'
export default {
  name: "send",
  data() {
    return {
      sendMsg: {
        name: "",
        meetAddr: '',
        msgtitle: "",
        msgtext: "",
        userId:''
      },
    };
  },
  created(){
    this.sendMsg.meetAddr = this.$route.query.meetAddr;
    getUserId(this.sendMsg.meetAddr).then(res=>{
      console.log(res)
      this.sendMsg.userId = res.data
    })
      
    //   console.log(this.sendMsg.receiveid)

  },
  methods: {
    sendMsged() {
      if (this.sendMsg.receiveid.length != 9) {
        this.$message({
          showClose: true,
          message: "接收人id格式错误！",
          type: "error",
        });
        this.$refs.receiveid.focus();
        return false;
      }
      if (!this.sendMsg.msgtitle) {
        this.$message({
          showClose: true,
          message: "请填写标题！",
          type: "error",
        });
        this.$refs.msgtitle.focus();
        return false;
      }

      if (!this.sendMsg.msgtext) {
        this.$message({
          showClose: true,
          message: "请填写正文！",
          type: "error",
        });
        this.$refs.msgtext.focus();
        return false;
      }
      

      this.$axios
        .post("/message/send", {
          adminId: this.$store.getters.token,
          userId: this.sendMsg.receiveid,
          title: this.sendMsg.msgtitle,
          content: this.sendMsg.msgtext,
        })
        .then((successResponse) => {
          if (successResponse.data.code === 0) {
          } else {
            this.$message({
              showClose: true,
              message: "发送失败！",
              type: "error",
            });
          }
        })
        .catch((failResponse) => {});
      this.$router.push("/").catch(() => {});
    },
  },
};
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
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

@mixin flex($direction: row, $content: space-between) {
  display: flex;
  flex-direction: $direction;
  justify-content: $content;
}

.kindsfont {
  font-size: 20px;
  font-family: 华文细黑;
}

.helpinfo {
  background-color: rgba(70, 130, 180, 0.1);
  transform: translateY(24%);
  margin: 10px;
  padding: 10px;
  width: 556px;
}

.hptext {
  color: rgba(70, 130, 180, 0.9);
}

.wrtext {
  color: rgba(255, 38, 38, 0.9);
}

.card {
  color: #666;
  @extend %shadow;

  ul {
    @include flex;

    li {
      flex: 1;

      a {
        color: #666666;
        align-items: center;
        padding-#{$top}: 20px;
        padding-#{$bottom}: 20px;
        @include flex(column);

        span {
          height: 44px;
        }

        .num {
          line-height: 44px;
          font-size: 42px;
          color: $bluee;
          margin: 0px;
        }
      }

      .kjfs-bluee {
        color: $bluee;
      }

      .kjfs-pinkk {
        color: $pinkk;
      }

      .kjfs-yelloww {
        color: $yelloww;
      }

      .kjfs-grennn {
        color: $grennn;
      }

      .kjfs-purplee {
        color: $purplee;
      }

      .kjfs-lightBluee {
        color: $lightBluee;
      }

      &:hover {
        .kjfs-bluee {
          color: #ffffff;
          background: $bluee;
        }

        .kjfs-pinkk {
          color: #ffffff;
          background: $pinkk;
        }

        .kjfs-yelloww {
          color: #ffffff;
          background: $yelloww;
        }

        .kjfs-grennn {
          color: #ffffff;
          background: $grennn;
        }

        .kjfs-purplee {
          color: #ffffff;
          background: $purplee;
        }

        .kjfs-lightBluee {
          color: #ffffff;
          background: $lightBluee;
        }
      }
    }
  }

  /* 谷歌 */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  /* 火狐 */
  input {
    -moz-appearance: textfield;
  }

  .table {
    padding: 21px;

    p {
      height: 52px;
      line-height: 52px;
      border: 1px solid #cccccc;
      overflow: hidden;
      border-#{$top}: none;
      @include flex(null, start);

      &:first-child {
        border-#{$top}: 1px solid #cccccc;
      }

      span {
      }

      .tit {
        width: 180px;
        min-width: 180px;
        height: 100%;
        text-align: center;
        border-#{$right}: 1px solid #cccccc;
        margin-#{$right}: 18px;
      }

      span.gitbox {
        flex: 1;
        height: 100%;
        overflow: hidden;
        @include flex(row, start);

        a {
          &:first-child {
            margin-#{$right}: 30px;
          }
        }
      }
    }
  }
}

#lineEcharts {
  margin-#{$top}: 30px;
  padding-#{$top}: 30px;
  @extend %shadow;
}

#maintable {
  margin-#{$top}: 30px;
  padding-#{$top}: 10px;
  @extend %shadow;
}

.chartArea {
  margin-bottom: 15px;
}
</style>
