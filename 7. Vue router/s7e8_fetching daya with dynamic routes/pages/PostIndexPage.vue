<template>
    <div>
        <div v-for="(post, index) in posts" >
            <router-link :to="'/posts/' + index">
                {{ post }}
            </router-link>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                posts: []
            }
        }
    }
</script>