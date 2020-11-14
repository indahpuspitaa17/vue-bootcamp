import Vue from 'vue';
import router from './router';
import ExampleComponent from './components/ExampleComponent';

new Vue({
    el: '#app',
    
    router,
    
    components: {
        ExampleComponent
    },
    
    data: {
        //
    },
});