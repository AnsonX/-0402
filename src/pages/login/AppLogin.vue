<template>
  <div class="page">
    <div class="login-box">
      <el-form
        ref="loginForm"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
        status-icon
        :model="loginForm.params"
        :rules="loginForm.rules"
      >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="loginForm.params.account" auto-complete="off" placeholder="账号" id="loginEmail"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="loginForm.params.checkPass" auto-complete="off" placeholder="密码" id="loginPassword"></el-input>
          <label id="showPasswordToggle">
            <el-checkbox v-model="act.checked" id="showPasswordCheck">显示密码</el-checkbox>
          </label>
          <router-link to="/" style="float: right; color: #bbbbbb">忘记密码？</router-link>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="act.loading">
            登录
          </el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <router-link to="/register">
            <el-button style="width:100%;">
              注册
            </el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import sha256 from 'crypto-js/sha256'

export default {
  name: 'appLogin',
  data () {
    return {
      common: {
      },
      act: {
        checked: false,
        loading: false,
        fromUrl: '/'
      },
      loginForm: {
        params: {
          account: 'admin',
          checkPass: '123456'
        },
        data: null,
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    }
  },
  methods: {
    handleSubmit (ev) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.act.logining = true
          const loginParams = { username: this.loginForm.params.account, password: sha256(this.loginForm.params.checkPass) }
          this.$store.dispatch('userLogin', loginParams).then(() => {
            this.act.logining = false
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
            this.$router.push(this.act.fromUrl)
          }).catch(err => {
            this.act.logining = false
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
  // beforeRouteEnter (to, from, next) {
  //   console.log('beforeRouteEnter:', to, from, next)
  //   next(vm => {
  //     if (from.fullPath !== '/register' && !from.meta.errorPage) {
  //       vm.fromUrl = from.fullPath
  //     }
  //   })
  // }
}
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  margin-bottom: 15px;
}

.page {
  background-color: #eff3f4;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #DDD;
  border-radius: .5em;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
