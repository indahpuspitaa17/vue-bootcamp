<template>
    <div class="flex flex-col items-center">
        <h1>My Transactions</h1>
        
        <div v-for="transaction in getTransactions" class="transaction">
            <div class="flex">
                <div class="w-20">{{ transaction.type }}</div>
                <div>{{ transaction.description.substring(0, 20) }}</div>
            </div>
            <div>{{ formatMoney(transaction.amount) }}</div>
        </div>
    </div>
</template>

<script>
    const mapGetters = require('vuex')['mapGetters'];
    
    module.exports = {
        computed: {
            ...mapGetters([
                'getTransactions'
            ])
        }
    }
</script>