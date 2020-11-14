import Vue from 'vue';

new Vue({
    el: '#app',
    
    components: {
        
    },
    
    data: {
        counter: 0
    },
    
    methods: {
        add: function (value) {
            this.counter += value;
        }
    }
});