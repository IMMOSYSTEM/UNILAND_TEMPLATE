<template>
    	<!-- Banner Section Start -->
		<section class="parallax-banner banner" id="banner" :style="`background-image: url(${image});`" >
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="banner_area">
							<h3 class="page_title">{{$t(`${pageTitle}`)}}</h3>
							<div class="page_location">
								<router-link to="/">{{ $t("routes.home.breadcrumb") }}</router-link> 
								<i class="fa fa-angle-right" aria-hidden="true"></i>
								<span>{{$t(`${pageTitle}`)}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Banner Section End -->
</template>

<script>
export default {
    props:{
        image:{
            type:String,
            required:true
        },
        pageTitle:{
            type:String,
            required:true
        }
    }
}
</script>

<style scoped>

.banner{
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    position: relative;
    padding: 50px 0 !important;
}

.parallax-banner{
    height: calc(30vh);
    /* Create the parallax scrolling effect */
    /* background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover; */
}
</style>