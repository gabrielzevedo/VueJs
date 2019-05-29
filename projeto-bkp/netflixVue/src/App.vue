<template>
    
<div class="contain">
  
  <categoria v-for="categoria in categorias" v-bind:key="categoria.id" v-bind:titulo="categoria.titulo" v-bind:filmes="categoria.filmes"></categoria>

</div>
      
      
      
</template>

<script>
//    import teste from './componentes/teste.vue';
    import Categoria from './componentes/Categoria.vue';
    
    export default {
        components:{
//          teste  
            Categoria  
        },
        created(){
            this.$http.get('http://localhost:3000/categorias').then(res => {
                this.categorias = res.body;
            });
        },
        data() {
            return {
                nomeProjeto: "Netflix com Vue",
                intervalo: null,
                categorias: []
            }
        }
        
    }

</script>
