import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import('../views/AboutView.vue')
  },
  {
    path:"/login",
    name: "LoginView",
    component: () => import("../views/LoginView.vue")

  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: "/properties",
    name: "PropertiesView",
    component: () => import("../views/PropertiesView.vue"),
  },
  {
    path: "/properties/:id",
    name: "PropertyView",
    component: () => import("../views/PropertyView.vue"),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
