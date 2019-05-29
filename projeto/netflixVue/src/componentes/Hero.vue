<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
         
          <div class="swiper-slide">
               <div class="image" style="background-image: url('https://image.tmdb.org/t/p/original/gJDwI9ql8c4ToMz3RJOInfx9Z1w.jpg')">
                </div>
          </div>
          
          <div class="swiper-slide">
               <div class="image" style="background-image: url('https://image.tmdb.org/t/p/original/tpeBBNruQdj1DVErql1GI6cem2i.jpg')">
                </div>

          </div>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>


<script>
    import Swiper from 'swiper'

    export default {
        props: ['titulo'],
        mounted: function() {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                keyboard: {
                    enabled: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            
            setTimeout(function(){
                swiper.update();
            }, 3000);
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
