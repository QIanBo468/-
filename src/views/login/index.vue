<template>
  <div class="login">
     这是登录
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      user: {
        account: "",
        password: ""
      }
    };
  },
  components: {},
  methods: {
    denglu() {
      if (this.user.account == "" || this.user.password == "") {
        this.$toast("请填写完整的信息");
      } else {
         this.$post({
          module: "Account",
          interface: "1000",
          data: this.user
        }).then(async res => {
          this.$store.commit("setUsers", res.accessToken);
          this.$toast({
            duration:1000,
            message:'登录成功'
          })
          await this.$sleep(1000)
          this.$router.push({
            name:'home'
          })
        }).catch(err=>{
          if(err.code ==4500) {
            this.$toast(err.message)
          }  
});
      }
    }
  }
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  .welcom {
    padding: 60px 0 0 32px;
    div:nth-child(1) {
      font-size: 32px;
      font-weight: 600;
      color: rgba(30, 30, 30, 1);
      height: 56px;
    }
    div:nth-child(2) {
      font-size: 24px;
      font-weight: 600;
      line-height: 18px;
      color: rgba(40, 40, 40, 1);
    }
  }
  .denglu {
    width: 307px;
    margin: 0 auto;
    margin-top: 60px;
    .denglu_center {
      height: 65px;
      border-bottom: 1px solid rgba(196, 196, 196, 1);
      input {
        background: none;
        outline: none;
        border: none;
        margin-top: 30px;
        font-size: 16px;
        width: 100%;
      }
      input::-webkit-input-placeholder {
        color: rgba(153, 153, 153, 1);
        font-size: 16px;
        font-weight: 600;
      }
    }
    .forget_password {
      margin-top: 10px;
      text-align: right;
      font-size: 12px;
      a {
        color: rgba(145, 143, 144, 1);
      }
    }
  }
  .login_btn {
    width: 307px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    background: linear-gradient(
      106deg,
      rgba(103, 103, 103, 1) 0%,
      rgba(30, 30, 30, 1) 100%
    );
    border-radius: 22px;
    margin: 0 auto;
    margin-top: 44px;
  }
  .bottom {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #918f90;
    span:nth-child(2) {
      color: rgba(44, 45, 53, 1);
    }
  }
}
</style>
7