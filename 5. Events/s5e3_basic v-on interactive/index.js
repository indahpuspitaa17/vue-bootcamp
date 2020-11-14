import Vue from 'vue';

new Vue({
    el: '#app',
    
    data: {
        exampleOne: 0,
        exampleTwo: 0,
        exampleThree: '',
        show: false,
        globalPage: true,
    },
    
    methods: {
        increaseByTwo: function () {
            this.exampleTwo += 2;
        },
        assignData: function (value) {
            this.exampleThree = value;
        },
        appear: function () {
            this.show = true;
        }
    }
});