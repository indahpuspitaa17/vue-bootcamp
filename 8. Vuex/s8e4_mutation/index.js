import Vue from 'vue';
import router from './router';
import store from './store';
import { mapGetters } from 'vuex';

new Vue({
    el: '#app',
    
    router,
    
    store,
    
    components: {
        
    },
    
    data: {
        //
    },
    
    computed: {
        ...mapGetters([
            'getMessage',
            'prefix'
        ])
    }
});