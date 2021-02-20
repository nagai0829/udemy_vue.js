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
      <!-- is属性でのデータの受け渡しv:bind:→:で省略可 -->
      <component :is="currentComponent"></component>
    </keep-alive>
      <EventTitle v-model="eventData.title"></EventTitle>
    <div>
      <EventTitle v-model="eventData.title"></EventTitle>
    </div>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 14,
      locations: ["東京","大阪", "名古屋"],
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        detail: "",
        isPrivate: false,
        target: [],
        price: [],
        location: []
      }
    };
  },
  // ローカル登録
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
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