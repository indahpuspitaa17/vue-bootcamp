import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const PageOne = { 'template': '<div>PageOne123</div>' };
const PageTwo = { 'template': '<div>My New Page Here</div>' };

const routes = [
    { path: '/page-one', component: PageOne },
    { path: '/new-page', component: PageTwo }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    
    router,
    
    components: {
        
    },
    
    data: {
        //
    },
});