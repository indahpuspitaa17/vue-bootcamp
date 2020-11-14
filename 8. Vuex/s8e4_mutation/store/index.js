import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        message: 'A new message',
        prefix: 'Messages: ',
    },
    
    getters: {
        prefix: state => {
            return state.prefix.toUpperCase();
        },
        getMessage: (state, getters) => {
            return getters.prefix + state.message;
        }
    }
    
});

module.exports = store;