<template>
  <el-card>
    <div slot="header" class="title">
      <el-button @click="handReturn" class="el-icon-back" circle></el-button>
    </div>
    <div>
      <el-form :model="user">
        <el-form-item label="账号">
          <el-input v-model="user.username" placeholder="请输入用户账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" placeholder="请输入用户密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="button-group-position">
        <el-button @click="signin">注册</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      }
    }
  },
  computed: {
    location() {
      return this.$store.state.baseUrl;
    }
  },
  methods: {
    handReturn() {
      this.$router.push({name: 'home'});
    },
    signin() {
      let message = this.$message;
      let store = this.$store;
      let router = this.$router;

      this.$axios
        .post(this.location + "signup", this.user)
        .then(function(response) {
          if(response.data.username != '') {
            store.commit("set_user_name", response.data.username);
            store.commit("set_user_state", true);
            router.push({name: 'home'});
          }
        })
        .catch(function() {
          message.error("服务出现了一些错误(っ °Д °;)っ");
        });
      
      this.$router.push({name: 'home'});
    }
  }
}
</script>

<style scoped>
.el-button {
  margin-right: 20px;
}
.button-group-position {
  clear: both;
  text-align: center;
  margin-top: 50px
}
.el-form {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.el-card {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;  
  width: 30%;
  height: 420px;
}
.title {
  padding-left: 10px;
}
</style>
