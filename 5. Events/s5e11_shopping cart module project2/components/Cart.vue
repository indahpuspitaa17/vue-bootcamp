<template>
    <div>
        <div>
            <ul>
                <li class="price-row">
                    <div>Old Red Friend</div>
                    <div class="quantity-row">
                        <div class="price-quantity">Qty: 2</div>
                        <div>$29.97</div>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="price-row">
            <div class="price-label">Sub-total</div>
            <div class="price-wrapper">$9.99</div>
        </div>
        <div class="price-row">
            <div class="price-label">Shipping</div>
            <div class="price-wrapper">$9.99</div>
        </div>
        <div class="price-row">
            <div class="price-label">Total</div>
            <div class="price-wrapper">$9.99</div>
        </div>
        <button class="checkout-button">CHECKOUT</button>
    </div>
</template>

<script>
    const EventBus = require('../bus');
    
    module.exports = {
        
        data: function () {
            EventBus.$on('add-product', product => {
                this.addProduct(product);
            });
            return {
                products: []
            }
        },
        
        methods: {
            addProduct: function (product) {
                let productIndex = this.products.findIndex(function (currentProduct) {
                    return currentProduct.id === product.id;
                });
                
                if (productIndex >= 0) {
                    return this.products[productIndex].qty++;
                }
                
                this.products.push({
                    ...product,
                    qty: 1,
                });
            }
        }
        
    }
</script>

<style scoped>
    .quantity-row {
        display: flex;
    }
    .price-quantity {
        margin-right: 15px;
    }
    .checkout-button {
        width: 100%;
        text-align: center;
        padding: 10px 0;
        background: #000;
        color: #eee;
    }
    .price-row {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        margin: 10px;
        padding-bottom: 10px;
    }
</style>