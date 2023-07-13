<template>
  <div v-text="timeText"></div>
  <button
    v-on:click="
      {
        decisionText();
      }
    "
  >
    受け取りボタン
  </button>
  <div v-bind:class="{ active }" class="decisiontextbutton">
    <button>いいえ</button>
    <button>はい</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeText: "",
      date: new Date(),
      active: false,
    };
  },
  //ボタンをクリックした時に、本当に受け取るかを確かめるアラート的な物を出す
  //はいの場合は受け取り完了のメッセージ、いいえの場合はキャンセルメッセージを表示
  //時間を表示するタイミングはアラートで、はいが押された時に表示する
  methods: {
    timeDate: function () {
      this.timeText =
        this.date.getHours() +
        "時" +
        this.date.getMinutes() +
        "分" +
        this.date.getSeconds() +
        "秒";
    },
    decisionText: function () {
      this.active = !this.active;
    },
  },
};
</script>

<style>
.decisiontextbutton {
  opacity: 0;
  transition: all 0.5s;
}
.decisiontextbutton.active {
  opacity: 1;
}
</style>
