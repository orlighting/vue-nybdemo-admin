<template>
  <div id="login">
    <div class="loginConbox">
      <div class="header">
        <!--<div class="logo">-->
        <!--<img src="../../assets/logo.png">-->
        <!--</div>-->
      </div>
      <div class="loginBox">
        <div class="loginCon">
          <p class="title">展会申报系统管理端</p>
          <p class="title">vue + springboot</p>
          <el-card shadow="always" class="login-module" v-if="smdl">
            <div slot="header" class="clearfix formTitlt">
              <span>密码登录</span>
              <span class="titIconbox">

            </span>
            </div>
            <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-input type="text" v-model="loginForm.id" auto-complete="off" placeholder="请输入登录账号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" v-model="loginForm.password" auto-complete="off"
                          placeholder="请输入登录密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" v-on:click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">

              </p>
            </el-form>
          </el-card>

          <el-card shadow="always" class="login-module" v-else>
            <div slot="header" class="clearfix formTitlt">
              <i class="iconfont xu-mimadenglu1 fa-lg iconcolor"></i>
              <i class="iconfont xu-imagevector el-icon--right fa-lg pointer" @click="smdl = !smdl"></i>

            </div>
            <div class="ewmbox">
              <div class="ewm">
                <img src="https://img.alicdn.com/tfscom/TB1ivYYyHvpK1RjSZFqwu3XUVXa.png">
              </div>
              <p class="smalltxt">
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      smdl: true,
      loginForm: {
        id: "",
        password: ""
      }
    }
  },
  methods: {
    submitForm () {
      let that = this
          // 将 id 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
    // that.$store.dispatch("setToken", that.loginForm.id).then(() => {
    //   that.$router.push({path: "/"})
    // }).catch(res => {
    //   that.$message({
    //     showClose: true,
    //     message: res,
    //     type: "error"
    //   })
    // })
      if (this.loginForm.id === "" || this.loginForm.password === "") {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error"
        })
        return false
      } else {

        this.$axios
          .post('/login/admin', {
            id: this.loginForm.id,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 0) {
              // 将 id 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
              that.$store.dispatch("setToken", that.loginForm.id).then(() => {
                that.$router.push({path: "/"})
              }).catch(res => {
                that.$message({
                  showClose: true,
                  message: res,
                  type: "error"
                })
              })
            }
            else {
              this.$message({
                showClose: true,
                message: "账号或密码错误！",
                type: "error"
              })
            }
          })
          .catch(failResponse => {
          })

      }
    },

  },
  mounted () {
    this.message()
  }
}
</script>
<style lang="scss">
  #login {
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    .loginConbox{
      background: #2d3a4b;
    }
    .header {
      height: 60px;
      position: relative;
      background: #2d3a4b;
      /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
      .logo{
        margin-left: 30px;
        width: 500px;
        float: left;
        height: 40px;
        padding-top: 10px;
        img{
          height: 100%;
        }
      }
    }

    .loginBox {
      .iconcolor {
        color: #409EFF;
      }

      padding: 74px 0 118px;

      .loginCon {
        width: 990px;
        margin: auto;
        position: relative;
        height: 388px;

        .el-card__header {
          border-bottom: 0px;
        }
        .title{
          font-size: 36px;
          font-weight: 600;
          color: #ffffff;
          width: 500px;
          float: left;
          margin-top: 0px;
          &:first-child{
            font-size: 34px;
            margin-top: 50px;
            margin-bottom: 30px;
          }
        }
        .login-module {
          width: 380px;
          height: 325px;
          margin-top: 60px;
          border: none;
          position: absolute;
          right: 0;

          .formTitlt {
            font-size: 18px;
            font-weight: 400;

            .titIconbox {
              float: right;

              .pointer {
                cursor: pointer;
              }
            }
          }

          .smalltxt {
            text-align: right;

            .a {
              text-decoration: none;
              color: #999999;
              font-size: 12px;
              margin-left: 8px;
            }
          }
        }

        .el-form-item__content {
          margin-left: 0px !important;

          .subBtn {
            width: 100%;
          }
        }
      }

      .el-input__inner, .el-button, .el-card, .el-message {
        border-radius: 0px !important;
      }

      .el-form-item__content .ico {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 999;
        width: 40px;
        height: 39px;
        text-align: center;
        border-right: 1px solid #ccc;
      }

      .ewmbox {
        width: 100%;
        height: 240px;
        margin-top: -25px;

        .ewm {
          width: 140px;
          height: 140px;
          margin: 20px auto;

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }

        .ewmicon {
          width: 140px;
          margin: 20px auto 0;

          .iconfont {
            float: left;
          }

          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }
      }
    }
  }
</style>
