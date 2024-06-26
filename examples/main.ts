import { createApp } from "vue";
import App from "./App.vue";
import router from "./src/router";
import TopBar from "./src/components/TopBar.vue";
import NavBar from "./src/components/NavBar.vue";
import DocPage from "./src/components/DocPage.vue";
import Snippet from "./src/components/Snippet.vue";
import BirdUI from "../packages";

// ----
import "../packages/styles/theme.less";
import "./src/assets/less/format.less";
// ----

const app = createApp(App);
app.use(router)
   .use(BirdUI);
app.component(TopBar.name!, TopBar)
   .component(NavBar.name!, NavBar)
   .component(DocPage.name!, DocPage)
   .component(Snippet.name!, Snippet);
app.mount('#app');
