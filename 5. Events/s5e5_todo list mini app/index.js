import Vue from 'vue';
import List from './components/List';

new Vue({
    el: '#app',
    
    components: {
        List
    },
    
    data: {
        item: '',
        items: ['item1', 'item2']
    },
    
    methods: {
        addItem: function () {
            this.items.push(this.item);
            // this.items.unshift(this.item);
            this.item = '';
        }
    }
});