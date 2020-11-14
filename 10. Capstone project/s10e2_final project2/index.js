import Vue from 'vue';
import router from './router';
import store from './store';

import Navigation from './components/Navigation';

new Vue({
    el: '#app',
    
    router,
    
    store,
    
    components: {
        Navigation
    },
    
    data: {
        //
    },
});