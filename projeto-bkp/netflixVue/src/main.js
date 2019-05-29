import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Swiper from 'swiper'

Vue.use(VueResource)
Vue.use(VueRouter)



import Home from './paginas/Home.vue'
const Contato = {template: '<p>Contato</p>'}
const SemPagina = {template: '<p>Erro 404 - Página não encontrada</p>'}




const routes = [
    {path: '/', component: Home},
    {path: '/contato', component: Contato},
    
]


const router = new VueRouter({
    routes
})


const app = new Vue({
    router
}).$mount('#app')