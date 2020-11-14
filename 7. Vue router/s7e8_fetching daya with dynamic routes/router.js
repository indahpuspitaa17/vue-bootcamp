import Vue from 'vue';
import VueRouter from 'vue-router';

import PostIndexPage from './pages/PostIndexPage';
import PostShowPage from './pages/PostShowPage';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/posts', component: PostIndexPage },
        { path: '/posts/:id', component: PostShowPage }
    ]
});

module.exports = router;