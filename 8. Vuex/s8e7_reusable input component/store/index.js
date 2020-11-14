import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        message: 'Init'
    },
    
    getters: {
        
    },
    
    mutations: {
        setMessage: (state, newMessage) => {
            state.message = newMessage;
        }
    },
    
    actions: {
        
    }
    
});

module.exports = store;