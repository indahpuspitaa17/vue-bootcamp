import Vue from 'vue';
import router from './router';
import store from './store';
import Money from './mixins/money';

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