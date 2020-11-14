<template>
    <div class="input-wrapper">
        <label :for="unique">{{ label }}</label>
        <input type="text" :id="unique" v-model="value" v-on:input="$emit('updated', value)" />
    </div>
</template>

<script>
    module.exports = {
        props: {
            label: String,
            unique: String,
        },
        
        data: function () {
            return {
                value: ''
            }
        }
    }
</script>