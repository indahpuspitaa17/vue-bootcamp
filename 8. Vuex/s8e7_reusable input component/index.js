import Vue from 'vue';
import router from './router';
import store from './store';

import InputField from './components/InputField';
import Listener from './components/Listener';

new Vue({
    el: '#app',
    
    components: {
        InputField, Listener
    },
    
    router,
    
    store,
    
    data: {
        //
    },
    
    computed: {
        
    }
});