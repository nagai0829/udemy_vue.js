<template>
    <div>
        <h2>{{ title | lowerCase | upperCase }}</h2>
        <p>{{ subtitle | upperCase  | lowerCase }}</p>
        <p>{{ number }}</p>
        <button @click="number++">+1</button>
    </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";
export default {
    mixins: [tokyoNumber],
    created() {
        console.log("created in componet");
    }
}
</script>