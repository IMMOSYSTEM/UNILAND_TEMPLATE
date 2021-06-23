<template>
    <!-- Property Grid Start -->
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
</template>

<script>
import { mapGetters } from "vuex";
// import SearchForm from "@/components/search/SearchForm.vue";
import SectionLoader from "@/components/layout/SectionLoader.vue";
import PropertyCard from "@/components/properties/PropertyCard.vue";
import NotResults from '@/components/layout/NotFound';
export default {
    components: {
        // SearchForm,
        PropertyCard,
        SectionLoader,
        NotResults
    },
    data() {
        return {
        codeShareProperties: 0,
        };
    },
    computed: {
        ...mapGetters({
        properties: "_getProperties",
        error: "_getError",
        }),
    },
    created() {
        if (this.$route.params.codeShareProperties) {
        this.codeShareProperties = this.$route.params.codeShareProperties;
        }
        this.$store.dispatch("getProperties", this.codeShareProperties);
    },
};
</script>