<template>
    <button @click="$emit('my-custom-event', infoTest)">Click Me</button>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                info: { id: 123, title: 'My Cool Title' },
                field: 'sdfsdf',
                field2: 'sdfsdf'
            }
        },
        
        computed: {
            infoTest: function () {
                return { id: 123, title: 'My Cool Title', field: this.field };
            }
        }
    }
</script>