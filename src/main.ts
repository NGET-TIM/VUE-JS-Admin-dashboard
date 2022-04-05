import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/assets/css/portal.css";
import "./assets/assets/datatables/dataTables.bootstrap4.min.css";


import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
