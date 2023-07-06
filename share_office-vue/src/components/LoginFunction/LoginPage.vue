<template>
  <div id="loginform">
    <!-- メールアドレス入力欄 -->
    <div class="mailaddress">
      <label>メール</label>
      <input
        v-bind="mailaddress"
        ref="input"
        type="text"
        placeholder="aaa@aaa"
      />
    </div>
    <!-- パスワード入力欄 -->
    <div class="password">
      <label>パスワード</label>
      <input type="text" placeholder="password" />
    </div>
    <!-- ボタン一覧 -->
    <div>
      <button>新規</button>
      <button v-on:click="loginbutton()" class="loginbutton">ログイン</button>
    </div>
  </div>
</template>

<script>
export default {
  date() {
    return {
      mailaddress: "",
    };
  },
  methods: {
    loginbutton() {
      console.log((this.mailaddress = this.$refs.input.value));
      this.$refs.input.value = "";
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
