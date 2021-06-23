<template>
    <div>
        <div class="col-md-3 col-sm-6">
            <div class="team_img member_info">
                <div class="profile-pic"><img :src="agent.image" class="img-agent"></div>
                <div class="member_info">
                    <h2 class="member-name">{{agent.fullname}}</h2>
                    <h5 class="member-name" v-if="agent.biografia">{{ agent.biografia }}t</h5>
                    <h5 class="member-name">{{agent.cellphone}}</h5>
                    <h5 class="member-name">{{agent.email}}</h5>
                </div>
            </div>
            <div class="profile_person ">
                    <div class="socail_area">
                        <ul>
                            <li><a :href="agent.fb"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a :href="agent.instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a :href="agent.tweet"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a :href="agent.linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</template>


<script>
import services from "@/store/_services";
export default {
    props: {
        agent: {
        type: Object,
        required: false,
        },
    },
    computed: {
        formatBiography() {
        return this.agent.biografia.substring(0, 125) + "...";
        },
    },
    methods: {
        goToAgent() {
        //this.$store.dispatch('setAgentActive',this.agent);

        let nameAgentFilt = services.normalize(this.agent.fullname);
        let folio = this.agent.folio;
        this.$router.push({
            name: "Agent",
            params: {
            folio,
            nameAgentFilt,
            },
        });
        },
    },
};
</script>

<style scoped>
.img-agent{
    width: 65%;
}

h5{
    font-size:12px
}
</style>