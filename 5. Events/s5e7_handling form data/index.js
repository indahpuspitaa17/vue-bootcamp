import Vue from 'vue';
import InputField from './components/InputField';

new Vue({
    el: '#app',
    
    components: {
        InputField
    },
    
    data: {
        form: {
            first_name: '',
            last_name: '',
            email: '',
        }
    },
});