<template>
    
<div class="contain">
  
  <categoria v-for="categoria in categorias" v-bind:key="categoria.id" v-bind:titulo="categoria.titulo" v-bind:filmes="categoria.filmes"></categoria>
  
  <categoria v-for="serie in series" v-bind:key="serie.id" v-bind:titulo="serie.titulo" v-bind:filmes="serie.temporadas"></categoria>

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
            console.log("as");
            this.$http.get('http://localhost:3000/categorias').then(res => {
                this.categorias = res.body;
            });
            
            this.$http.get('http://localhost:3000/series').then(res => {
                this.series = res.body;
            });
            
        },
        data() {
            return {
                nomeProjeto: "Netflix com Vue",
                intervalo: null,
                categorias: [],
                series: []
            }
        }
        
    }

</script>
