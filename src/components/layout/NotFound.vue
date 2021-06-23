<template>
    <!-- Error Section Start -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="error_area">
                    <div class="page_error"><span v-for="(number, i) in splitCode" :key="number" :index="i">{{number}}</span></div>
                    <h4 class="section_title_green">{{$t(`components.error_section.${code}.title`)}}</h4>
                    <p>{{$t(`components.error_section.${code}.description`)}}</p>
                    <router-link to="/" class="btn btn-default">{{$t("components.error_section.go_home")}}</router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Error Section End -->
</template>

<script>
export default {
    props:{
        code:{
        typeo:String,
        require:true
        }
    },
    computed:{
        splitCode(){
        console.log(this.code);
        let stringCode= this.code.toString();
        console.log(stringCode);
        return stringCode.split("")
        }
    }
}
</script>