import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CafesView from './views/CafesView.vue'
import AvaliarView from './views/AvaliarView.vue'
import RankingView from './views/RankingView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cafes', component: CafesView },
  { path: '/avaliar', component: AvaliarView },
  { path: '/ranking', component: RankingView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
