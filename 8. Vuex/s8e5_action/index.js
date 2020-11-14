import Vue from 'vue';
import router from './router';
import store from './store';
import { mapGetters } from 'vuex';

new Vue({
    el: '#app',
    
    router,
    
    store,
    
    methods: {
        updateMessage: function () {
            this.$store.commit('setMessage', 'A better message!');
        }
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