import Vue from "vue";
import VueRouter from "vue-router";
import messagesRoutes from "../modules/messages/router/index";

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  }
];

const routes = baseRoutes.concat(messagesRoutes, []);
const router = new VueRouter({
  routes
});
export default router;
