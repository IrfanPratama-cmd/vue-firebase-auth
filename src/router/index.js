
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth : true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue'),
    meta: {
      requiresAuth : true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser){
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && 
  !auth.currentUser){
    next('/login')
    return;
  }

  next();
})

export default router
