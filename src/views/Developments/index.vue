<template>
    <!-- Property Grid Start -->
		<section id="property_area">
            <NotResults v-if="error==204" code="204"/>
			<div v-else class="container">
                <SectionLoader v-if="!developments" />
                <div v-else class="row">
                    <DevelopmentCard
                    v-for="(item, i) in developments"
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
import SectionLoader from "@/components/layout/SectionLoader.vue";
import DevelopmentCard from "@/components/developments/DevelopmentCard.vue";
import NotResults from '@/components/layout/NotFound';
// import SearchForm from "@/components/search/SearchForm.vue";
export default {
    components: {
        DevelopmentCard,
        SectionLoader,
        NotResults,
        // SearchForm
    },
    computed: {
        ...mapGetters({
        developments: "_getDevelopments",
        error: "_getError",
        }),
    },
    created() {
        this.$store.dispatch("getDevelopments");
    },
};
</script>
