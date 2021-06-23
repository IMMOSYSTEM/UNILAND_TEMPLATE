<template>
    <div id="homeCarousel">
        <VueAgile v-if="items.length>0" ref="main" :fade="true" :dots="false" class="contain-slide" >
            <div v-for="(slide,i) in items" :key="slide.folio" :index="i" class="slide">
                <img  class="card-img image-slide-back" :src="slide.largefile" :alt="slide.alt"/>
                <div class="card-img-overlay slide-img-overlay cc_pointer" 
                    @click="slide.type != 1?goToProperty(slide.folio,slide.propertyNameEs):goToDevelopment(slide.folio,slide.developmentNameEs)">
                    <img class="image-slide" :src="slide.largefile" :alt="slide.alt"/>
                    <div class="row align-items-center justify-content-center text-center up">
                        <div class="col-md-11">
                            <h1 @click="slide.type != 1?goToProperty(slide.folio,slide.propertyNameEs):goToDevelopment(slide.folio,slide.developmentNameEs)" class="mb-2 cc_pointer">
                            {{ slide.type != 1 ? slide.propertyNameEs : slide.developmentNameEs }}
                            </h1>
                            <p class="mb-2">
                                <i class="fa fa-map-marker red1" aria-hidden="true"> </i> 
                                <span class="h2 text-success font-weight-bold">
                                    {{(slide.city)?`${slide.city}, ${slide.state}`:slide.state}}
                                </span>
                            </p>
                            <a  @click="slide.type != 1? goToProperty(slide.folio,slide.propertyNameEs):goToDevelopment(slide.folio,slide.developmentNameEs)" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">
                                {{ $t("components.home_carousel.details") }}
                            </a>
                        </div>
                    </div>
                    <div v-if="info.logoClean" 
                    class="watermark cc_pointer" :style="'background-image:url('+info.logoClean+'); '" @click="slide.type != 1?goToProperty(slide.folio,slide.propertyNameEs):goToDevelopment(slide.folio,slide.developmentNameEs)"> </div>
                </div>
            </div>
            <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
            <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
        </VueAgile>
        
        <SectionLoader v-else/>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile';
import {mapGetters} from "vuex";
import SectionLoader from "@/components/layout/SectionLoader.vue";
import services from '@/store/_services';
export default {
    components: {
        VueAgile,
        SectionLoader
    },
    props:{
        items:{
            type:Array,
            required:true
        }
    },
    computed: {
        ...mapGetters({
            info:'_getInfoCompany',
        })
    },
    methods:{
         goToProperty(folio, name) {      
            let namePropFilt = services.normalize(name);
            this.$router.push({name: 'Property', params: {folio,namePropFilt}  })
        },
        goToDevelopment(folio, name) {
            let nameDevFilt = services.normalize(name);
            this.$router.push({ name: 'Development', params: {folio,nameDevFilt}  })
        }
    },
    created(){
        this.origin=this.$route.name;
    }
}
</script>

<style >
    #homeCarousel .watermark{
        height: 84vh;
        margin-top: -84vh;
    }
    #homeCarousel .image-slide{
        object-fit: contain;
        object-position: center;
        height: 84vh;
        width: 100%;
        filter:alpha(opacity=90);
        opacity: 90;
    }
    #homeCarousel .image-slide-back{
        filter: blur(20px);
        -webkit-filter: blur(20px);
        height:  84vh;
    }
    #homeCarousel .slide-img-overlay{
        padding: 0 !important;
    }
    #homeCarousel .slide:hover .slide-caption{
        display: block;
    }
    #homeCarousel .slide-caption{
        display: none;
        margin-top: -130px;
        position: sticky;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    } 
    #homeCarousel .slide-caption h3{
        position: relative;
        font-size: 2rem;
        color: #fff !important;
    }
    #homeCarousel .slide-caption #folio{
        margin-left: 100px;
        float: left;
        color: #fff;
        font-size: 1rem;
    }
    #homeCarousel .background-caption{
        height: 130px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.383);
        position: absolute;
        padding: 2rem;
    }

    @media only screen and (max-width:991px){
        #homeCarousel .image-slide,
        #homeCarousel .image-slide-back,
        #homeCarousel .watermark{
            height:70vh;
        }
        
        #homeCarousel .slide-caption{
            display: block;
            margin-top: -15%;
        } 
        #homeCarousel .slide-caption #folio{
            margin-left: 80px;
            font-size: 0.8rem;
        }
        #homeCarousel .background-caption{
            height:auto;
            padding: 1rem;
        }
        #homeCarousel .agile__nav-button{
            margin: -38vh 20px !important;
        }
        #homeCarousel .slide-caption h3{
            font-size: 1.5rem;
        }
         #homeCarousel h1 {
          font-size: 28px;
        }
        #homeCarousel .text-success {
          font-size: 20px;
        }
    }

    @media only screen and (max-width:767px){
        #homeCarousel .slide-caption{
            margin-top: -90px;
        } 
        #homeCarousel .agile__nav-button{
            margin: -39vh 15px !important;
        }
        #homeCarousel .slide-caption h3{
            font-size: .8rem;
        }
        #homeCarousel .slide-caption #folio{
            float: none;
            margin: auto;
        }
        #homeCarousel h1 {
          font-size: 17px;
        }
        #homeCarousel .text-success {
          font-size: 16px;
        }
        #homeCarousel .btn.btn-2{
            padding: 10px 13px !important;
        }
        #homeCarousel .watermark{
            background-size: auto 80px !important;
        }
    }
    
    #homeCarousel .agile__nav-button {
        margin: -50vh 40px;
        z-index: 1;
        background: rgba(255, 255, 255, 0.657);
        border: 1px rgba(0, 0, 0, 0.486) solid ;
        border-radius: 100%;
        height: 40px;
        width: 40px;
    }
    #homeCarousel .agile__nav-button:hover{
        color: #fff;
        background: rgba(0, 0, 0, 0.534);
    }
  #homeCarousel .red1{
    color: #ef4b4a !important;
    font-size:20px;
    margin-right:10px;
  }
  #homeCarousel .im {
    width: 100% !important;
    height: 100% !important;
  }
  @media screen and (max-width: 767px) {
    #homeCarousel .im {
      width: 80% !important;
    }
  }
  #homeCarousel h1 {
    font-weight: 900 !important;
    color: #fff !important;
    font-weight: normal !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    text-shadow: 0px 0px 7px black !important;
  }
  #homeCarousel .text-success {
    color: #fff !important;
    text-shadow: 0px 0px 17px black !important;
  }

  #homeCarousel .up{
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0rem;
      z-index: 1;
  }

  #homeCarousel .watermark{
        max-height: 50%;
        background-size: auto 150px;
        bottom: -5%;
    }

    #homeCarousel .watermark{
        opacity: .6;
    }
</style>