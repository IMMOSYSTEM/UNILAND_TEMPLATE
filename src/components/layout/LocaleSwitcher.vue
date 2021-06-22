<template>
  <select name="" id="locale" v-model="$i18n.locale">
    <option
      v-for="locale in locales"
      :key="locale.key"
      :value="locale.key"
      class="color-b"
      :style="`background-image:url(${locale.icon});`"
    >
      {{ locale.label }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      locales: [
        { key: "es", label: "Español" },
        { key: "en", label: "English"},
      ],
    };
  },
  watch: {
    "$i18n.locale": {
      handler(locale) {
        localStorage.setItem("locale", locale);
      },
    },
  },
};
</script>

<style>
.color-b{
  color: #6c7a7d;
}

#locale {
  font-size: 13px;
  padding-top:2em;
  padding-bottom: 1.5rem;
  padding-left: 20px;
  padding-right: 20px;
  background-color: transparent;
  color: #6c7a7d;
  border: none;
  font-weight: 400;
  line-height: 1.4285em;
  letter-spacing: .05em;
}
#locale:hover{
  color: #000;
}

#locale:focus{
  outline: none;
  
}
@media only screen and (max-width:1199px) {
  #locale {
    padding:7px 15px;
    line-height: 1.4285em;
    letter-spacing: .0em;
    font-size: 14.4px; 
  }
}

.ftco-navbar-light.scrolled #locale {
    padding-top: 1.2rem !important;
    padding-bottom: 0.9rem !important;
    color: #000000 !important;
}
</style>