<template>
<div class="col-md-4 col-sm-4 prop-size">
    <div class="property_grid">
        <div class="img_area">
            <div class="sale_btn">{{ item.bestOperation }}</div>
            <div v-if="info.logoClean" class="watermark" :style="'background-image:url('+info.logoClean+'); '"> </div>
            <img :src="item.smallphoto" id="propImg" :alt="item.alt" :title="item.namePropertyEs + '-IMAGE'">
            <!-- <div class="sale_amount">2 Hours Ago</div> -->
        </div>
        <div class="property-text"> 
            <a v-if="item.namePropertyEs" @click="goToProperty(item.folio, item.namePropertyEs)">
                <h5 class="property-title">{{ item.namePropertyEs }}</h5>
            </a> 
            <span v-if="item.address">
                <i class="fa fa-map-marker" aria-hidden="true"></i> {{ item.address }} 
            </span>
            <div class="quantity">
                <ul v-if=" item.m2c != 0 ||  item.mlot != 0 || item.bedrooms != 0 || item.bathrooms != 0">
                    <li v-if="item.bedrooms">
                        <span>{{$t("components.property_card.bedrooms")}}</span>{{ item.bedrooms }}
                    </li>
                    <li v-if="item.m2c != 0">
                    <span>{{$t("components.property_card.construction")}}</span> {{ item.m2c }} m <sup>2</sup>c
                    </li>
                    <li v-if="item.mlot != 0">
                    <span>{{$t("components.property_card.construction")}}</span>  {{ item.mlot }} m<sup>2</sup>c
                    </li>
                    <li v-if="item.bathdrooms">
                        <span>{{ $t("components.property_card.bathrooms") }}</span>{{ item.bathrooms }}
                    </li>
                </ul>
            </div>
            <span class="">{{$t("components.property_card.legend")}}</span>
        </div>
        <div class="bed_area">
            <ul>
                <li>{{item.bestPrice | format}}</li>
                <!-- <li class="flat-icon"><a href="#"><i class="flaticon-like"></i></a></li>
                <li class="flat-icon"><a href="#"><i class="flaticon-connections"></i></a></li> -->
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
    data() {
        return {
        mainPrice: 0,
        secondPrice: 0,
        mainOperation: 0,
        secondOperation: 0,
        };
    },
    computed:{
        ...mapGetters({
        info:'_getInfoCompany',
        }),
    },
    filters: {
        truncate: function(str) {
        return str.substring(0, 125) + "...";
        },
        areaFormat:function(value) {
        return numeral(value).format("0,0");
        },
        format: function(value) {
        //Formateo de decimales
        let decimalPrice = value.lastIndexOf(".");
        //Extaracción de moneda
        let currentPriceM = value.indexOf("MXN");
        let currentPriceU = value.indexOf("USD");
        
        // Precio formateado value.substr(currentPrice)
        let formatPrice=value.substr(0,decimalPrice)+" ";
        if(currentPriceM!='-1'){
            formatPrice+= value.substr(currentPriceM)
        }else{
            formatPrice+= value.substr(currentPriceU)
        }
        
        return formatPrice;
        //return numeral(value).format("0,0");
        }
    },
    methods: {
        goToProperty() {
        let namePropFilt = services.normalize(this.item.namePropertyEs);
        let folio = this.item.folio;
        this.$router.push({
            name: "Property",
            params: {
            folio,
            namePropFilt,
            },
        });
        },
    },
    created() {
        /* For Base Template*/
        let prices = this.item.prices;
        let operations = this.item.operations;
        if (prices.opportunity_sold) {
        this.mainPrice = prices.opportunity_sold;
        this.mainOperation = operations.opportunity_sold;
        this.secondPrice = prices.sold;
        this.secondOperation = operations.sold;
        } else if (prices.opportunity_rent) {
        this.mainPrice = prices.opportunity_rent;
        this.mainOperation = operations.opportunity_rent;
        this.secondPrice = prices.rent;
        this.secondOperation = operations.rent;
        } else if (prices.sold) {
        this.mainPrice = prices.sold;
        this.mainOperation = operations.sold;
        } else if (prices.rent) {
        this.mainPrice = prices.rent;
        this.mainOperation = operations.rent;
        }
    },
};
</script>

<style scoped>
img {
    width: 100%;
    background-size: cover;

    }
    #propImg {
    height: 250px;
    width: 360px;
    cursor: pointer;
    }
    @media (max-width: 767px) {
    #propImg {
        height: auto;
        width: 100%;
    }
}

.prop-size{
    height: 480px;
    margin-bottom: 25px;
}
</style>