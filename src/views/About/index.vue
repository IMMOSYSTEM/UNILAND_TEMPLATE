<template>
    <div>
        <!-- About Accordion Part Start -->
		<section id="about_description">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="we_do">
							<div class="title-row"><h2 class="section_title_blue">{{$t("pages.about.vision.title")}} <span>{{$t("pages.about.vision.title2")}}</span></h2></div>
							<p>{{$t("pages.about.vision.description")}} </p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="we_do">
							<div class="title-row"><h2 class="section_title_blue">{{$t("pages.about.mision.title")}} <span>{{$t("pages.about.mision.title2")}}</span></h2></div>
							<p>{{$t("pages.about.mision.description")}} </p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Who We Are Part Start -->
		<section id="who_are">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-7">
						<div class="row">
							<div class="who_text">
								<div class="section_title_white"><h2> {{info.companyName}}</h2></div>
								<p>{{$t("pages.about.company.description")}}</p>
							</div>
						</div>
					</div>
                    <div class="col-md-5">
                        <img class="img-about" src="../../../public/img/about2.jpg" alt="">
                    </div>
					
				</div>
			</div>
		</section>
		<!-- Who We Are Part End -->
    </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      info: "_getInfoCompany",
    }),
  },
};
</script>

<style scoped>
.img-about {
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    position: relative;
}
</style>