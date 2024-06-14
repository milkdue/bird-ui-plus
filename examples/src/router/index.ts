import { createMemoryHistory, createRouter } from "vue-router";
import routes from "./router.config";

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;