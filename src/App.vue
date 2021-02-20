<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader> 
    <!-- @〇〇子から親への受け口 -->
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent = 'Home'">Hoem</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 14,
      currentComponent: ""
    };
  },
  // ローカル登録
  components: {
    LikeHeader,
    About,
    Home
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

<style>
  div {
    border: 1px solid red;
  }
  
</style>