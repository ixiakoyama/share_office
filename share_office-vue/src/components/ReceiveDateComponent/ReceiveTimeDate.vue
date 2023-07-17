<template>
  <button
    v-on:click.once="
      {
        decisionButton();
      }
    "
  >
    受け取る
  </button>

  <p>{{ timeText }}</p>
  <p>{{ completionText }}</p>
  <p>{{ cancelText }}</p>
</template>

<script>
export default {
  data() {
    return {
      timeText: "",
      completionText: "",
      cancelText: "",
      date: new Date(),
    };
  },
  //ボタンをクリックした時に、本当に受け取るかを確かめるアラート的な物を出す
  //はいの場合は受け取り完了のメッセージ、いいえの場合はキャンセルメッセージを表示
  //時間を表示するタイミングはアラートで、はいが押された時に表示する
  methods: {
    decisionButton: function () {
      const judgmentButton = window.confirm("本当に受け取りますか？");

      if (judgmentButton) {
        this.timeText =
          this.date.getHours() +
          "時" +
          this.date.getMinutes() +
          "分" +
          this.date.getSeconds() +
          "秒";
        this.completionText = "受け取りが完了ました";
      } else {
        location.reload();
      }
    },
  },
};
</script>

<style></style>
