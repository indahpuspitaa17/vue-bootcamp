<template>
    <div class="balance">
        <h2>Account Balance <strong>{{ formatMoney(getTotal) }}</strong></h2>
    </div>
</template>

<script>
    const mapGetters = require('vuex')['mapGetters'];
    
    module.exports = {
        computed: {
            ...mapGetters([
                'getTotal'
            ])
        }
    }
</script>