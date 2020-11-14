import Vue from 'vue';
import router from './router';
import store from './store';
import Money from './mixins/money';

import Navigation from './components/Navigation';
import Modal from './components/Modal';
import TotalBar from './components/TotalBar';

new Vue({
    el: '#app',
    
    router,
    
    store,
    
    components: {
        Navigation,
        Modal,
        TotalBar
    },
    
    data: {
        //
    },
});