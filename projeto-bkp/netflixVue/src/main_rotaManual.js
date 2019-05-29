import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import Home from './paginas/Home.vue'
const Contato = {template: '<p>Contato</p>'}
const SemPagina = {template: '<p>Erro 404 - Página não encontrada</p>'}

const rotas = {
    '/': Home,
    '/contato': Contato
}

new Vue({
    el: '#app',
    data: {
        rotaAtual: window.location.pathname
    },
    computed: {
        exibeComponente (){
            return rotas[this.rotaAtual] || SemPagina
        }
    },
    render (h) {return h(this.exibeComponente)}
})
