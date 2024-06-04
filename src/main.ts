import "./assets/main.scss";

import { createApp } from "vue";
//importamos router
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");
