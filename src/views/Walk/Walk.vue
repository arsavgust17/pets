<template>
    <div>
        Walk {{id}}
    </div>
</template>

<script>
    export default {
        name: "Walk",
        data() {
            return {
                id: this.$route.params.id,
            };
        },
    }
</script>

<style scoped>

</style>