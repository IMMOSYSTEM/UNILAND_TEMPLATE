import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

function loadLocaleMessages() {
    const locales = require.context(
        "../locales/",
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}

function getLocale() {
    const LSLocale = localStorage.getItem("locale");
    if (LSLocale) return LSLocale;
    let locale = "en";

    const userLocale = navigator?.languages?.[0] || navigator?.language;

    locale = userLocale ? userLocale.split("-")?.[0] : locale;

    return locale;
}

const i18n = new VueI18n({
    locale: getLocale(),
    fallbackLocale: "en",
    messages: loadLocaleMessages(),
});

export default i18n;