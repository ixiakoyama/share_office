<template>
  <div>受け取り側</div>
  <ReceiveTimeDate />
</template>

<script>
import ReceiveTimeDate from "./ReceiveTimeDate.vue";
export default {
  components: { ReceiveTimeDate },
  data() {
    return {
      text: "武藤が受け渡しました",
    };
  },
};
</script>
