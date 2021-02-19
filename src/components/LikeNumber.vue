<template>
    <div>
        <p>いいね({{ halfNumber }})</p>
        <button @click="increment">+1</button>
    </div>
  
</template>

<script>
export default {
  props: ["totalNumber"],
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
      increment() {
        // 子から親への送り口$emit("〇〇",　第2引数),$emitでカスタムイベントが作れる
          this.$emit("my-click", this.totalNumber + 1);
      }
  }
};
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>