<template>
    <dev>
        <slot></slot>
        
    </dev>
</template>

<script>
export default {
    data(){
        return {
            user: {
                firstName: "Jack",
                lastName: "Donald"
            }
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
  }
</style>