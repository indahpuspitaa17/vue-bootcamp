<template>
    <div class="flex flex-col items-center">
        <h1>My Transactions</h1>
        
        <div v-for="(transaction, index) in getTransactions" class="transaction">
            <div class="flex">
                <div class="w-20">
                    <plus-sign v-if="transaction.type === 'credit'" class="text-green-500"></plus-sign>
                    <minus-sign v-else class="text-red-600"></minus-sign>
                </div>
                <div>{{ transaction.description.substring(0, 20) }}</div>
            </div>
            <div class="flex">
                <div class="mr-4">{{ formatMoney(transaction.amount) }}</div>
                <div>
                    <button @click.prevent="removeTransaction(index)">X</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const mapGetters = require('vuex')['mapGetters'];
    const PlusSign = require('../../components/ui/PlusSign');
    const MinusSign = require('../../components/ui/MinusSign');
    
    module.exports = {
        components: {
            PlusSign,
            MinusSign
        },
        computed: {
            ...mapGetters([
                'getTransactions'
            ])
        },
        methods: {
            removeTransaction: function (index) {
                this.$store.dispatch('removeTransaction', index);
            }
        }
    }
</script>