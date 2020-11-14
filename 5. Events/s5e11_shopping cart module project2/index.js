import Vue from 'vue';
import Product from './components/Product';
import Cart from './components/Cart';

new Vue({
    el: '#app',
    
    components: {
        Product, Cart
    },
    
    data: {
        products: [
            { id: 120, name: 'Colorful Cups', price: 999, image: 'images/cups1.jpg' },
            { id: 121, name: 'Coffee & Home', price: 1499, image: 'images/cups2.jpg' },
            { id: 122, name: 'Old Red Friend', price: 1999, image: 'images/cups3.jpg' },
        ]
    },
});