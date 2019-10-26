<template>
    <div>
        ProfilePetEdit {{id}}
    </div>
</template>

<script>
    export default {
        name: "ProfilePetEdit",
        data() {
            return {
                id: this.$route.params.id,
            };
        },
    };
</script>

<style scoped>

</style>