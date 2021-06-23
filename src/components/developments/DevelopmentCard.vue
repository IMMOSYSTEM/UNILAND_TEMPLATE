<template>
<div class="col-md-4 col-sm-4">
    <div class="property_grid">
        <div class="img_area">
            <div class="sale_btn">#{{ item.folio }}</div>
            <div v-if="info.logoClean" class="watermark" :style="'background-image:url('+info.logoClean+'); '"> </div>
            <img :src="item.image.smallphoto" :alt="item.image.alt" :title="item.image.title">
            <!-- <div class="sale_amount">2 Hours Ago</div> -->
        </div>
        <div class="property-text"> 
            <a v-if="item.developmentNameEs" @click="goToDevelopment()">
                <h5 class="property-title">{{ item.developmentNameEs }}</h5>
            </a> 
            <span v-if="item.address">
                <i class="fa fa-map-marker" aria-hidden="true"></i> {{ item.address }} 
            </span>
            <div class="quantity">
                <ul v-if="  item.m2From != 0 || item.m2To != 0 ||  item.bedFrom != 0 ||  item.bathFrom != 0">
                    <li v-if="item.bedFrom > 0">
                        <span>{{ $t("components.development_card.bedrooms")   }}</span>{{ item.bedFrom }}
                    </li>
                    <li v-if="item.bathFrom > 0">
                        <span>{{ $t("components.development_card.bathrooms") }}</span>{{ item.bathFrom }}
                    </li>
                    <li v-if="item.m2From != 0">
                    <span>{{$t("components.development_card.construction")}}</span> {{ item.m2From }} m <sup>2</sup>c
                    </li>
                    <li v-if="item.m2To != 0">
                    <span>{{$t("components.development_card.construction")}}</span>  {{ item.m2To }} m<sup>2</sup>c
                    </li>
                </ul>
            </div>
            <span class="">{{$t("components.property_card.legend")}}</span>
        </div>
        <div class="bed_area">
            <ul>
                <li>{{ item.priceFrom }}</li>
                <!-- <li class="flat-icon">{{$t("components.property_card.legend")}}</li> -->
                <!--<li class="flat-icon"><a href="#"><i class="flaticon-connections"></i></a></li> -->
            </ul>
        </div>
    </div>
</div>
</template>


<script>
import { mapGetters } from "vuex";
import services from "@/store/_services";
export default {
    props: {
        item: {
        type: Object,
        required: true,
        },
    },
    computed:{
        ...mapGetters({
        info:'_getInfoCompany',
        }),
    },
    methods: {
        goToDevelopment() {
        let nameDevFilt = services.normalize(this.item.developmentNameEs);
        let folio = this.item.folio;
        this.$router.push({
            name: "Development",
            params: {
            folio,
            nameDevFilt,
            },
        });
        },
    },
};
</script>