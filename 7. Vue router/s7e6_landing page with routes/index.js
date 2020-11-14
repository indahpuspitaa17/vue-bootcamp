import Vue from 'vue';
import router from './router';

import Navigation from './components/Navigation';
import InputField from './components/InputField';

new Vue({
    el: '#app',
    
    router,
    
    components: {
        Navigation,
        InputField
    },
    
    data: {
        //
    },
});