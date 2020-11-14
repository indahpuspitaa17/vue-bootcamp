import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        message: 'A new message'
    },
    
    getters: {
        getMessage: state => {
            return 'MESSAGE: ' + state.message;
        }
    }
    
});

module.exports = store;