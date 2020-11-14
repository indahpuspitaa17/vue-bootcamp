<template>
    <input v-model="message" />
</template>

<script>
    module.exports = {
        computed: {
            message: {
                get() {
                    return this.$store.state.message;
                },
                set(value) {
                    this.$store.commit('setMessage', value);
                }
            }
        }
    }
</script>