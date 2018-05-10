import Vue from "vue";
import VueAnalytics from "vue-analytics";
import { GOOGLE_ANALYTICS_ID } from "~/constants";

export default ({ app: { router } }) => {
  // automatically track page views from router
  Vue.use(VueAnalytics, { router, id: GOOGLE_ANALYTICS_ID });
};
