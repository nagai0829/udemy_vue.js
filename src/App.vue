<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue";

export default {
  // ローカル登録
  components: {
    LikeHeader
  }
}
</script>

<style>
  div {
    border: 1px solid red;
  }
</style>