import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        transactions: [
            { type: 'debit', description: 'Vue Class', amount: 4500 },
            { type: 'credit', description: 'Payroll', amount: 100000 },
        ]
    },
    
    getters: {
        getTransactions: function (state) {
            return state.transactions;
        },
        
        getTotal: function (state) {
            let balance = 0;
            
            if (state.transactions.length) {
                state.transactions.forEach(transaction => {
                    if (transaction.type === 'credit') {
                        balance += transaction.amount;
                    } else {
                        balance -= transaction.amount;
                    }
                });
            }
            
            return balance;
        }
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