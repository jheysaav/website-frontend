import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/plugins/router";
import { createHead, Head } from "@vueuse/head";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import "virtual:windi.css";

const app = createApp(App);

const head = createHead();

app.use(router);
app.use(head);

app.component(Head.name, Head);
app.component("DefaultLayout", DefaultLayout);

app.mount("#app");
