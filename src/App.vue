<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>    
    <!-- @〇〇子から親への受け口 -->
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :totalNumber="number"></LikeNumber>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 14
    }
  },
  // ローカル登録
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>

<style>
  div {
    border: 1px solid red;
  }
</style>