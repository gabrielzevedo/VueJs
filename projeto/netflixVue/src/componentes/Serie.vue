<template>
   <div>
   <div class="title">
       <h3>{{titulo}}</h3>
   </div>
   
   <div class="swiper-container" ref="seriesSwiper">
        <select v-model="temporada" v-on:change="selecionaTemp()">
           <option value="" disabled selected hidden>Selecione uma temporada</option>
            <option v-for="(temporada, index) in temporadas" v-bind:value="index">{{temporada.id}}ª Temporada</option>
        </select>
        <div class="swiper-wrapper row__inner">
        
          <episodio v-for="episodio in temporadas[temporada].episodios" v-bind:key="episodio.id" v-bind:titulo="episodio.titulo" v-bind:thumbnail="episodio.thumbnail" v-bind:sinopse="episodio.sinopse" class="swiper-slide"></episodio>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    </div>
    
</template>


<script>
    import Swiper from 'swiper';
    import Episodio from './Episodio.vue';
    var swiperSerie;
    
    export default {
        data() {
            return {
                temporada: 0
            }
        },
        props: ['titulo', 'temporadas'],
        components: {
            Episodio
        },
        mounted: function() {
            swiperSerie = new Swiper(this.$refs.seriesSwiper, {
                slidesPerView: 5,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        },
        methods: {
            selecionaTemp() {
                setTimeout(function(){
                    swiperSerie.update();
                }, 5);
            }
        }
    }

</script>


<style>
    @import '../assets/swiper.css';

    .swiper-slide .image {
        width: 100%;
        max-width: 1920px;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: 100%;
    }

</style>
