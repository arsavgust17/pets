<template>
    <div class="profile">
        <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
                {{'List item ' + o }}
            </div>
        </el-card>
    </div>
</template>


<script>
    import axios from 'axios';
    export default {
        name: "Profile",
        data() {
            return {
                url: 'https://rest.hackmoscow.rainweb.ru/auth/login',
                login: 'max@hm.ru',
                password: 'maxx',
            };
        },
        created() {
            axios({
                method: 'POST',
                url: this.url,
                data: {
                    login: this.login,
                    password: this.password,
                },
            })
        }
    };
</script>

<style scoped>

</style>