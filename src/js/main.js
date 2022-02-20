/**
 * Load Style file
 */
import "../assets/sass/style.scss";

/**
 * Load vue
 */
import * as Vue from "vue";

/**
 * Load vue components
 */
import greeting from "../components/greeting.vue";

const Greeting = Vue.createApp({
  components: {
    greeting,
  },
}).mount("#greeting");
