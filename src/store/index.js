import { createStore } from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export const store = createStore ({
    state() {
        return {
            searchInputValue: '',
        }
    },

    mutations, 
    actions,
    getters,
});
