import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";
import "@/assets/css/tailwind.css";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
