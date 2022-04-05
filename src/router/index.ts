import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import BookFormAddView from "../views/Book/BookFormAdd.vue";
import BookList from "../views/Book/indexView.vue";
import Dashboard from "../components/dashboard/home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/admin/books",
      name: "Books",
      component: BookList,
    },
    {
      path: "/admin/book/add",
      name: "Add New Book",
      component: BookFormAddView,
    }
  ],
});

export default router;
