import Vue from "vue";
import Router from "vue-router";
import Login from "./router_views/Login.vue";
import Register from "./router_views/Register.vue";
import Profile from "./router_views/Profile.vue";
import Home from "./router_views/Home.vue";
import Probe from "./router_views/Probe.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/probe",
      name: "probe",
      component: Probe
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
