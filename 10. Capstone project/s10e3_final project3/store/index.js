import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        transactions: []
    },
    
    getters: {
        
    },
    
    mutations: {
        addTransaction: function (state, transaction) {
            state.transactions.unshift(
                JSON.parse(JSON.stringify(transaction))
            );
        }
    },
    
    actions: {
        addTransaction: function (context, transaction) {
            context.commit('addTransaction', transaction);
        }
    }
    
});

module.exports = store;