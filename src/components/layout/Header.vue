<template>
    <header id="header" v-if="info">
        <!-- Top Header Start -->
        <div id="top_header">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-5">
                        <div class="top_contact">
                            <ul v-if="info.phone !='0'">
                                <li><i class="fa fa-phone" aria-hidden="true"></i>{{$t("layout.nav.top.company_phone")}} +{{info.phone}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-7">
                        <div class="top_right">
                            <ul>
                                <li>
                                    <!-- <p>Locale Sw</p> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Top Header End --> 
        
        <!-- Nav Header Start -->
        <div id="nav_header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <nav class="navbar navbar-default nav_edit"> 
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> 
                                    <span class="sr-only">Toggle navigation</span> 
                                    <span class="icon-bar"></span> 
                                    <span class="icon-bar"></span> 
                                    <span class="icon-bar"></span> 
                                </button>
                                <router-link class="navbar-brand" to="/">
                                    <img v-if="info" class="header-logo m-1" :src="info.logoClean" alt="logo_web"/>
                                    <h4 v-else ><span v-if="info.companyName !='0'">{{ info.companyName }}</span></h4>
                                </router-link> 
                            </div>
                            <div class="collapse navbar-collapse my_nav" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-right nav_text">
                                    <li class="dropdown">
                                        <router-link to="/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{ $t("layout.nav.home") }} </router-link>
                                    </li>
                                    <li class="dropdown">
                                        <router-link to="/nosotros" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{ $t("layout.nav.about.title") }} </router-link>
                                    </li>
                                    <li class="dropdown">
                                        <router-link to="/propiedades" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{ $t("layout.nav.properties") }} </router-link>
                                    </li>
                                    <li class="dropdown">
                                        <router-link to="/desarrollos" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{ $t("layout.nav.developments") }} </router-link>
                                    </li>
                                    <li class="dropdown">
                                        <router-link to="/agentes" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{ $t("layout.nav.agents") }} </router-link>
                                    </li>
                                    <li class="dropdown"><router-link to="/contacto">{{ $t("layout.nav.contact") }}</router-link></li>
                                    <li><LocaleSwitcher/></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- Nav Header End -->
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
import LocaleSwitcher from "@/components/layout/LocaleSwitcher.vue";
export default {
    components:{
        LocaleSwitcher
    },
    computed:{
        ...mapGetters({
            info:'_getInfoCompany'
        }),
    },
}
</script>

<style scoped>
.header-logo {
    width: 3vw !important;
}
@media only screen and (max-width: 991px) {
    .header-logo {
        width: 20%;
    }
}
</style>