<template>
  <!-- v-on:clickでクリックされた時に関数clickが発火 -->
  <!-- v-bind:classで真偽性を確認し、falseの場合は削除、trueの場合はbuttonのclassに追加する -->
  <button v-bind:class="{ active }" v-on:click="click" class="menu-trigger">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav class="hamburgermenu">
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      //activeのデフォルトをfalseに設定
      active: false,
    };
  },
  // クリックしたらデータactiveの真偽値を変更
  methods: {
    click: function () {
      this.active = !this.active;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  position: relative;
  z-index: 100;
}
.menu-trigger {
  position: relative;
  width: 32px;
  height: 26px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #172a22;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 11px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}
.menu-trigger.active span:nth-of-type(1) {
  transform: translateY(11px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  transform: translateY(-11px) rotate(45deg);
}
</style>
