<template>
  <div id="loginform">
    <!-- メールアドレス入力欄 -->
    <div class="mailaddress">
      <label>メール</label>
      <input v-model.trim="mailText" type="email" placeholder="aaa@aaa" />
    </div>
    <!-- パスワード入力欄 -->
    <div class="password">
      <label>パスワード</label>
      <input v-model.trim="passwordText" type="password" placeholder="password" />
    </div>
    <!-- ボタン一覧 -->
    <div>
      <button>新規</button>
      <button v-on:click="loginButton()" class="loginbutton">ログイン</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  date() {
    const mailText = ref('');
    const passwordText = ref('');
    return {
      mailText,
      passwordText
    };
  },
  methods: {
    loginButton: function () {
      console.log(this.mailText);
      console.log(this.passwordText);
    },
  },
};
</script>

<style>
.mailaddress label,
.password label {
  display: block;
}
</style>
