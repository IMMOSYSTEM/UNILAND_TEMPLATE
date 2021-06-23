<template>
<!-- Find Part Satrt -->
<div class="col-md-12">
    <div class="property_search_form"> 
        <form action="#" method="post" class="property_filter_input">
            <div class="row">
                <!-- KEYWORD -->
                <div v-if="!search.searchDevelopments"  class="col-md-3 col-sm-6">
                    <label for="list-types">KEYWORD </label>
                    <input class="form-control" type="text" v-model="search.keyword" :placeholder="$t('layout.search_form.keyword_input')">
                </div>
                <!-- PRICE MIN -->
                <div class="col-md-3 col-sm-6">
                    <label class="label-switch"> {{$t("layout.search_form.min_price_input") }}</label>
                    <money 
                    type="text" 
                    class="form-control" 
                    step="any" 
                    name="minprice" 
                    v-model="search.minPrice" 
                    v-bind="moneyMin">
                    </money>
                </div>
                <!-- PRICE MAX -->
                <div class="col-md-3 col-sm-6">
                    <label class="label-switch"> {{$t("layout.search_form.max_price_input") }}</label>
                    <money
                    type="text"
                    class="form-control d-block rounded-0"
                    step="any"
                    name="maxprice"
                    v-model="search.maxPrice"
                    v-bind="moneyMax">
                    </money>
                </div>
                <!-- PROPERTY TYPE -->
                <div class="col-md-3 col-sm-6">
                    <label for="select-city">{{$t(`layout.search_form.${(!search.searchDevelopments)?'property_type_input':'development_type_input'}`)}}</label>
                    <select v-model="search.type" class="selectpicker form-control" name="select-type" id="select-type">
                        <option selected value=""> {{ $t("layout.search_form.option_select") }} </option>
                        <option v-for="(type,i) in (!search.searchDevelopments)?input.types:input.typesDevs" :key="i" :index="i" :value="type.typepropertyid">{{type.typepropertyspa}}</option>
                    </select>
                </div>
                <!-- OPERATION -->
                <div v-if="!search.searchDevelopments" class="col-md-3 col-sm-6">
                    <label for="select-city">{{$t("layout.search_form.operation_input")}}</label>
                    <select class="selectpicker form-control"  v-model="search.operation">
                        <option selected value="">
                            {{ $t("layout.search_form.option_select") }}
                        </option>
                        <option value="1">
                            {{ $t("layout.search_form.option_sold") }}
                        </option>
                        <option value="2">
                            {{ $t("layout.search_form.option_rent") }}
                        </option>
                        <option value="3">
                            {{ $t("layout.search_form.option_vacation") }}
                        </option>
                    </select>
                </div>
                <!-- LOCATION -->
                <div class="col-md-3 col-sm-6">
                    <label for="select-city">{{$t("layout.search_form.location_input")}}</label>
                    <select class="selectpicker form-control" name="select-city" id="select-city" v-model="search.city">
                        <option selected value="">{{ $t("layout.search_form.option_select") }}</option>
                        <option v-for="(city,i) in (!search.searchDevelopments)?input.cities:input.citiesDevs" :key="i" :index="i" :value="city.city">{{city.city}}</option>
                    </select>
                </div>

                <div class="col-md-3 col-sm-6">
                    <label class="label-switch">{{$t("layout.search_form.type_search")}}:</label>
                    <div class="radio_check">
                        <input v-model="search.searchDevelopments" type="checkbox" id="radio_3" name="question" value="Yes">
                        <label for="radio_3"><span>No</span><span>Yes</span></label>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <br>
                    <input type="submit" name="search" class="btn btn-default" value="Search">
                </div>
            </div>
        </form>
    </div>
</div>
<!-- Find Part End --> 
</template>

<script>
import { mapGetters } from "vuex";
import { Money } from "v-money";
export default {
    components: {
        Money,
    },
    data() {
        return {
        search: {
            operation: "",
            type: "",
            typeDevs: "",
            city: "",
            keyword: "",
            minPrice: "",
            maxPrice: "",
            urbanization: "",
            beds: "",
            baths: "",
            parking: "",
            searchDevelopments: false,
        },
        searching: false,
        moneyMin: {
            thousand: ",",
            prefix: "$",
            precision: 0,
            masked: false,
        },
        moneyMax: {
            thousand: ",",
            prefix: "$",
            precision: 0,
            masked: false,
        },
        advanced: false,
        };
    },
    computed: {
        ...mapGetters({
        input: "_getInputs",
        }),
    },
    methods: {
        searchProps() {
        this.searching = true;
        let searchForm = this.search;
        this.$store.dispatch("getResults", searchForm);

        if (!this.search.searchDevelopments) {
            if (this.$route.name != "Results")
            this.$router.push({ name: "Results" });
        } else {
            if (this.$route.name != "ResultsDevs")
            this.$router.push({ name: "ResultsDevs" });
        }

        this.searching = false;
        },
        advancedChange() {
        let temp = this.advanced;
        this.advanced = !temp;
        },
        changeForm() {
        for (let i in this.search) {
            if (i != "searchDevelopments") this.search[i] = "";
        }
        },
    },
    created() {
        this.$store.dispatch("getInputs");
        console.log(this.$route.name);
        if (
        this.$route.name == "Developments" ||
        this.$route.name == "ResultsDevs"
        ) {
        this.search.searchDevelopments = true;
        }
    },
};
</script>

<style scoped>
.important_facts {
    padding: 0 !important;
}
</style>