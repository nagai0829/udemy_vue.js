import Vue from 'vue'
import App from './App.vue'
// グローバル登録
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
    // グローバル登録
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function(value) {
    return value.toUpperCase();
});
Vue.mixin({
    created() {
        console.log("global in mixin");
    }
})


new Vue({
    render: h => h(App),
}).$mount('#app')