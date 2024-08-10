import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView  from "@/views/ContactView.vue";
import JobComponent from "@/components/JobComponent.vue";
import JobDetailsComponent from "@/components/JobDetailsComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/job',
      name: 'job',
      component: JobComponent
    },
    {
      path: '/job/:id',
      name: 'jobDetails',
      component: JobDetailsComponent
    }
  ]
})

export default router
