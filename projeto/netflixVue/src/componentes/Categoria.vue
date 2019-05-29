<template>
   <div>
   <div class="title">
       <h3>{{titulo}}</h3>
   </div>
   
   <div class="swiper-container" ref="categoriaSwiper">
        <div class="swiper-wrapper row__inner">
         
          <filme ref="capa" v-for="filme in filmes" v-bind:key="filme.id" v-bind:titulo="filme.titulo" v-bind:imagem="filme.imagem" class="swiper-slide"></filme>
          
          
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
    import Filme from './Filme.vue';

    export default {
        props: ['titulo', 'filmes'],
        components: {
            Filme
        },
        mounted: function() {
            
            var swiper = new Swiper(this.$refs.categoriaSwiper, {
                slidesPerView: 6,
                slidesPerGroup: 6,
                spaceBetween: 15,
                slidesOffsetBefore: 40,
                slidesOffsetAfter: 40,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

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
