import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        thresholds: {
          xs: 375,
          md: 800
        },
        scrollBarWidth: 24,
      },
});
