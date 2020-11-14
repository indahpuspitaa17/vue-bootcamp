<template>
    <input v-model="value" name="my-input" />
</template>

<script>
    module.exports = {
        props: ['default'],
        
        mounted() {
            this.value = this.default;
        },
        
        updated() {
            return (this.value === this.default)
                ? this.$emit('dirty-field', false)
                : this.$emit('dirty-field', true);
        },
        
        data: function () {
            return {
                value: ''
            }
        }
    }
</script>