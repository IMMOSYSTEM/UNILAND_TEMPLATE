<template>
    <div>
        <!-- Footer Section Start -->
		<section id="footer">
			<div class="container">
				<div class="row">
                    <!-- logo & social media -->
					<div class="col-md-4 col-sm-6">
						<div class="footer_widget text-center"> 
							<div class="footer-logo">
                                <router-link to="/">
                                    <img v-if="info.logoClean" class="footer-logo" :src="info.logoClean" alt="logo_web"/>
                                    <h5 v-else>{{ info.companyName }}</h5>
                                </router-link>
                            </div>
							<div class="socail_area text-center">
								<ul>
									<li v-if="info.fb != '0'"><a :href="info.fb"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li v-if="info.tw != '0'"><a :href="info.tw"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li v-if="info.linkedin != '0'"><a :href="info.linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
									<li v-if="info.pinterest != '0'"><a :href="info.pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li v-if="info.instagram != '0'"><a :href="info.instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
									<li v-if="info.youtube"><a :href="info.youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
                    <!-- Menu -->
					<div class="col-md-4 col-sm-6">
						<div class="footer_widget">
							<div class="footer-title">
								<h4>{{ $t("layout.footer.menu_title") }}</h4>
							</div>
							<div class="footer_contact">
								<ul>
									<li><router-link to="/">{{ $t("layout.nav.home") }}</router-link></li>
									<li><router-link to="/nosotros">{{ $t("layout.nav.about.title") }}</router-link></li>
									<li><router-link to="/propiedades">{{ $t("layout.nav.properties") }}</router-link></li>
									<li><router-link to="/desarrollos">{{ $t("layout.nav.developments") }}</router-link></li>
									<li><router-link to="/agentes">{{ $t("layout.nav.agents") }}</router-link></li>
									<li><router-link to="/contacto">{{ $t("layout.footer.company_address") }}</router-link></li>
								</ul>
							</div>
						</div>
					</div>
                    <!-- Contact -->
					<div class="col-md-4 col-sm-6">
						<div class="footer_widget">
							<div class="footer-title">
								<h4>{{ $t("layout.footer.contact_title") }}</h4>
							</div>
							<div class="footer_contact">
								<ul>
									<li> <i class="fa fa-map-marker" aria-hidden="true"></i>
										<div class="ftr-list">
											<h6 class="touch-title">{{ $t("layout.footer.company_address") }}</h6>
											<span>{{ info.address }}</span>
										</div>
									</li>
									<li> <i class="fa fa-phone" aria-hidden="true"></i>
										<div class="ftr-list">
											<h6 class="touch-title">{{ $t("layout.footer.company_phone") }}</h6>
											<span>{{ info.phone }}</span>
										</div>
									</li>
									<li> <i class="fa fa-envelope-o" aria-hidden="true"></i>
										<div class="ftr-list">
											<h6 class="touch-title">{{ $t("layout.footer.company_email") }}</h6>
											<span>{{ info.reserveemail }}</span> 
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Footer Section End --> 
        <!-- Bottom Footer Start -->
		<div id="bottom_footer">
			<div class="reserve_text"> <span> {{info.companyName}}<sup>&copy;</sup> {{year}} | 
            Powered with <i class="far fa-heart"></i> & <i class="fas fa-mug-hot"></i> by 
            <a href="https://www.immosystem.com.mx/" target="_blank">IMMO CRM 360<sup>&copy;</sup></a></span> </div>
		</div>
		<!-- Bottom Footer End -->
    </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            year: "",
        };
    },
    created() {
        let d = new Date();
        this.year = d.getFullYear();
    },
    computed: {
        ...mapGetters({
        info: "_getInfoCompany",
        }),
    },
};
</script>

<style scoped>

.footer-logo {
    display: inline-block;
    max-width: 30%;
    margin-top: auto;
}

.footer-logo img {
    margin-top: 25%;
    max-width: 165px;
    max-height: 200px;
}

a{
    color: #fff;
}
a:hover{
    color: #ef4b4a;
}
</style>