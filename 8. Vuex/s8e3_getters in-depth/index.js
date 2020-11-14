import Vue from 'vue';
import router from './router';
import store from './store';

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
        myMessage: function () {
            return this.$store.getters.getMessage;
        }
    }
});