import Vue from 'vue';
import VueRouter from 'vue-router';
import TransactionsCreate from './pages/transactions/create';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/transactions/create', component: TransactionsCreate }
    ]
});

module.exports = router;