import Vue from 'vue';
import VueRouter from 'vue-router';
import TransactionsIndex from './pages/transactions/index';
import TransactionsCreate from './pages/transactions/create';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/transactions', component: TransactionsIndex },
        { path: '/transactions/create', component: TransactionsCreate }
    ]
});

module.exports = router;