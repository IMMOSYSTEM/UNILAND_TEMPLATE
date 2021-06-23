<template>
    <div>
        <!-- Agents Section Start -->
		<section id="agents">
			<div class="container">
                <!-- <SectionLoader v-if="!agent"/> -->
				<div class="agent_part">
					<div class="row justify-content-center">
                        <AgentCard 
                            v-for="(item, i) in agents"
                            :key="item.folio"
                            :name="item.folio"
                            :index="i"
                            :agent="item"/> 
					</div>
				</div>
			</div>
		</section>
		<!-- Agents Section End -->
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import SectionLoader from "@/components/layout/SectionLoader.vue";
import AgentCard from "@/components/agents/AgentCard.vue";
export default {
    components: {
        SectionLoader,
        AgentCard,
    },
    computed:{
            ...mapGetters({
                agents:'_getTeam',
                error:'_getError',
            }),
        },
        created(){
        this.$store.dispatch('getTeam');
        },
};
</script>