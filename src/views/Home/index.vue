<template>
<div>
    <div>
        <HomeCarousel :items="items"/>
    </div>
    <div id="find_area">
        <div class="container">
            <div class="row">
                <SearchForm/>
            </div>
        </div>
    </div>

    <section id="property_area">
            <NotResults v-if="error==204" code="204"/>
			<div v-else class="container">
                <SectionLoader v-if="!properties" />
                <div v-else class="row">
                    <PropertyCard
                    v-for="(item, i) in properties"
                    :key="item.folio"
                    :name="item.folio"
                    :index="i"
                    :item="item"/>
                </div>
            </div>
		</section>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchForm from "@/components/search/SearchForm.vue";
import PropertyCard from "@/components/properties/PropertyCard.vue";
import HomeCarousel from "@/components/carousel/HomeCarousel.vue";
import SectionLoader from "@/components/layout/SectionLoader.vue";
export default {
    components: {
        HomeCarousel,
        SearchForm,
        PropertyCard,
        SectionLoader
    },
    computed: {
        ...mapGetters({
        items:'_getHomeSlide',
        properties:'_getHomeProperties',
        error:'_getError',
        }),
    },
    created(){
        this.$store.dispatch('getHomeSlide');
        this.$store.dispatch('getHomeProperties');
    }
};
</script>