<template>
  <div class='page'>
    <div class="login-box">
      <el-form :model="ruleForm.params" :rules="ruleForm.rules" ref="ruleForm" label-position="left" label-width="0px"
               class="demo-ruleForm login-container" status-icon>
        <h3 class="title">注册</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm.params.account" auto-complete="off" placeholder="账号"
                    id="loginEmail"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.params.password" auto-complete="off" placeholder="密码"
                    id="loginPassword"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.params.checkPass" auto-complete="off" placeholder="重复密码"
                    id="loginCheckPass"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="act.logining">
            注册
          </el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <router-link to="/login">
            <el-button style="width:100%;">
              登录
            </el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'appRegister',
  data () {
    return {
      common: {},
      act: {
        loading: false
      },
      ruleForm: {
        params: {
          account: '',
          password: '',
          checkPass: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { validator: this.validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: this.validatePass2, trigger: 'blur' }
          ]
        }
      }
    }
  },
  methods: {
    validatePass (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.params.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    },
    validatePass2 (rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.params.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    handleSubmit (ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.act.loading = true
          const registerParams = {
            username: this.ruleForm.params.account,
            password: this.ruleForm.params.password,
            checkPass: this.ruleForm.params.checkPass
          }
          this.$store.dispatch('userRegister', registerParams).then(data => {
            this.act.loading = false
            this.$message({
              message: '注册成功！',
              type: 'success'
            })
            this.$router.push({path: '/login'})
          }).catch(err => {
            this.act.loading = false
            console.log(err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
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

.login-box .svgContainer {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 1em;
  border-radius: 50%;
  pointer-events: none;
}
</style>
