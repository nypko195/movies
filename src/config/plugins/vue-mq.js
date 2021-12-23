import Vue from 'vue';
import VueMq from 'vue-mq';

export default () => {
    Vue.use(VueMq, {
        breakpoints: {
            xs: 768,
            sm: 992,
            md: 1440,
            lg: 1920,
            xl: Infinity,
        },
        defaultBreakpoint: 'xl',
    });
};