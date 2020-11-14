<template>
    <div>
        <router-link to="/posts">Back</router-link>
        <div>
            Post Data
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                post: null
            }
        }
    }
</script>