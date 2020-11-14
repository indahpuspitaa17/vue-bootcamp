import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {
        transactions: [
            { type: 'debit', description: 'Vue Class', amount: 4500 },
            { type: 'credit', description: 'Payroll', amount: 100000 },
        ],
        modal: false,
        modalResolve: null
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
        },
        
        getModal: function (state) {
            return state.modal;
        }
    },
    
    mutations: {
        addTransaction: function (state, transaction) {
            state.transactions.unshift(
                JSON.parse(JSON.stringify(transaction))
            );
        },
        removeTransaction: function (state, index) {
            state.transactions.splice(index, 1);
        },
        showModal: function (state, payload) {
            state.modalResolve = payload.resolve;
            state.modal = true;
        },
        hideModal: function (state) {
            state.modalResolve = null;
            state.modal = false;
        },
        resolveModal: function (state) {
            if (state.modalResolve) {
                state.modalResolve();
            }
        }
    },
    
    actions: {
        addTransaction: function (context, transaction) {
            context.commit('addTransaction', transaction);
        },
        removeTransaction: function (context, index) {
            context.commit('removeTransaction', index);
        },
        showModal: function (context) {
            return new Promise((resolve, reject) => {
                context.commit('showModal', { resolve });
            })
        },
        hideModal: function (context) {
            context.commit('hideModal');
        },
        resolveModal: function (context) {
            context.commit('resolveModal');
            context.commit('hideModal');
        }
    }
    
});

module.exports = store;