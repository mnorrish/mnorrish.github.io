import Vue from "vue";
import VueAnalytics from "vue-analytics";

export default ({ app: { router } }) => {
  // automatically track page views from router
  Vue.use(VueAnalytics, { router, id: process.env.GOOGLE_ANALYTICS_ID });
};
