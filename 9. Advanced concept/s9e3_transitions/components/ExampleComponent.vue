<template>
    <div>
        <h1 v-if="text" class="text-6xl">Hello</h1>
        
        <button @click="text = !text">Toggle</button>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                text: true
            }
        }
    }
</script>

<style>
    
</style>