<template>
    <div class="product-wrapper">
        <div class="product-image">
            <img :src="image">
        </div>
        <div class="product-name">{{ name }}</div>
        <div class="product-price">{{ priceFormatted }}</div>
        <div><button>ADD</button></div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            name: String,
            price: Number,
            image: String
        },
        
        computed: {
            priceFormatted: function () {
                return '$' + this.price / 100;
            }
        }
    }
</script>

<style scoped>
    .product-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
        margin-bottom: 15px;
    }
    .product-image,
    .product-name,
    .product-price {
        margin: 0 10px;
    }
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 9999px;
        border: 3px solid #fff;
    }
    button {
        background-color: #222;
        color: #eee;
        padding: 5px 10px;
        border-radius: 15px;
        margin-right: 15px;
    }
</style>