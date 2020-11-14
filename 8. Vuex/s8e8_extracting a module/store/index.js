import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        message: 'Init',
        amount: 0
    },
    
    getters: {
        
    },
    
    mutations: {
        setField: (state, fieldObject) => {
            state[fieldObject.field] = fieldObject.value;
        }
    },
    
    actions: {
        
    }
    
});

module.exports = store;