import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Auth0Plugin } from "./auth";

/* eslint-disable */
const domain: string = "dev-onmy.us.auth0.com";
const clientId: string = "Esv8v9VRHEWA0z3KsiLD45skZc87bW4P";
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState: any) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
