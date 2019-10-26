<template>
    <div>
        ProfilePet {{id}}
    </div>
</template>

<script>
    export default {
        name: "ProfilePet",
        data() {
            return {
                id: this.$route.params.id,
            };
        },
    };
</script>

<style scoped>

</style>