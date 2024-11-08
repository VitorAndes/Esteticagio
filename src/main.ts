import { createApp } from "vue";

import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import "./styles/resetLess.less";
import "./styles/style.less";

const app = createApp(App);
app.use(MotionPlugin);
app.mount("#app");
