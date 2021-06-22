import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../views/Home/";
import Properties from "../views/Properties/";
import Property from "../views/Properties/Detail/";
import Developments from "../views/Developments/";
import Development from "../views/Developments/Detail/";
import DevelopmentSections from '../views/Developments/Detail/sections.vue';
import About from "../views/About/";
import Contact from "../views/Contact/";
import Agent from "../views/Agent/";
import Results from "../views/Results/";
import NotFound from "../views/Error/";

Vue.use(VueRouter);

const routes=[
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      slide:true,
      hideBanner:true,
      hideSearch: true,
    },
  },
  {
    path: '/propiedades',
    name: 'Properties',
    component: Properties,
    meta:{
      pageTitle:'routes.properties.page_title',
    children: [{
        //Use when share a list of properties from IMMO CRM 360
        path: '/propiedades/:codeShareProperties',
        name: "ShareProperies",
        component: Properties,
        meta: {
          pageTitle:'routes.properties.page_title',
          hideSearch: true,
        },
      }],
  },
  },
  {
    path: '/propiedad/:folio/:namePropFilt',
    name: 'Property',
    component: Property,
    meta:{
      pageTitle:'routes.property.page_title',
      hideBanner:true,
      hideSearch: true,
    },
    children:[{
            // Use when agentId exist
            path: "/propiedad-:folio-:agentId",
            name: "PropertyAgent",
            component: Property,
            meta: {
              hideBanner: true,
              pageTitle:'routes.property.page_title',
            },
      },
      {
        // Use when namePropFilt not exist
        path: '/propiedad/:folio',
        name: "PropertyShort",
        component: Property,
        meta: {
          hideBanner:true,
          pageTitle:'routes.developments.page_title',
        }
      }
    ]
  },
  {
    path: '/desarrollos',
    name: 'Developments',
    component: Developments,
    meta:{
      pageTitle:'routes.developments.page_title'
    }
  },
  {
    path: '/desarrollo/:folio/:nameDevFilt',
    name: 'Development',
    component: Development,
    meta:{
      breadcrumb:'routes.development.breadcrumb',
      pageTitle:'routes.developments.page_title',
    },
    children: [{
      // Use when namePropFilt not exist
      path: "/desarrollo/:folio",
      name: "DevelopmentOutName",
      component: Development,
      meta: {
          hideBanner: true,
      },
  }, ],
  },
  {
    path: "/desarrollo-secciones/:folio",
    name: "DevelopmentSections",
    component: DevelopmentSections,
    meta: {
        hideBanner: true,
        hideSearch: true,
    },
},
  {
    path: '/nosotros',
    name: 'About',
    component: About,
    meta:{
      pageTitle:'routes.about.page_title',
      hideSearch:true,
    }
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact,
    meta:{
      breadcrumb:'Contacto',
      pageTitle:'routes.contact.page_title'
    }
  },
  {
    path: '/equipo',
    name: 'Agent',
    component: Agent,
    meta:{
      breadcrumb:'Nuestros Franquiciados',
      pageTitle:'routes.agents.page_title',
      hideSearch:true,
    }
  },
  {
    
    path: '/busqueda',
    name: 'Results',
    component: Results,
    meta: {
        pageTitle: 'routes.search_results.page_title',
    },
    children: [{
        path: '/busqueda-desarrollos',
        name: 'ResultsDevs',
        component: Results,
        meta: {
            pageTitle: 'routes.search_results.page_title_developments',
        }
    }]
  },
  {
    path: "/:catchAll(.*)",
        component: NotFound,
        name: "Error",
        meta: {
            pageTitle: 'routes.error.page_title',
            hideSearch: true,
        }
  }, 
];

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
});

router.afterEach(() => {
  document.documentElement.scrollTop = 0;
});

// This callback runs before every route change, including on page load.
/*router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  //const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});*/



export default router
