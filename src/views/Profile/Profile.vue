<template>
    <div class="profile">
        <el-card class="box-card pet-profile-header">
            <div class="pet-photo-wrapper">
                <img src="../../assets/user-icon.png" alt="User" class="pet-photo"/>
            </div>
            <div class="pet-profile-header__user">
                <div class="profile-name">
                    <h1 class="pet-profile-header__user-name">{{profile.name}}</h1>
                </div>
                <div class="profile-phone">{{profile.phone}}</div>
                <div class="profile-address">{{profile.address}}</div>
                <div class="link-btn-wrapper">
                    <a href="#" @click.prevent="editProfile()" class="link-btn">Редактировать профиль</a>
                </div>
            
            </div>
        </el-card>

        <el-card v-for="pet in pets" class="box-card">
            <div class="pet-logo-wrapper">
                <img class="pet-logo" src="../../assets/Pet-logo.png" alt="Pet-logo">
            </div>
            <div>
                <h3 class="pet-name box-card__title">{{pet.name}}</h3>
                <div class="pet-type">
                    <span class="poroda">{{pet.breed.name}}</span>, 
                    <span class="type">{{pet.type.name}}</span>
                </div>
            </div>
        </el-card>

        <div class="add-pet">
            <el-button type="success" style="background: #6074E8;" icon="el-icon-plus" circle></el-button>
            <div class="add-pet-tex">
                <div class="text">
                    Добавить питомца
                </div>
                <div class="gray-text">
                    для создания прогулок
                </div>
            </div>
        </div>
        <el-card class="box-card pet-profile-header">
            <div class="block">
                <h3>Рейтинг исполнителя</h3>
                <div class="profile-rating">
                    <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template=""
                            allow-half>
                    </el-rate>
                    <div class="rating-value">{{Number.parseFloat(value)}}{{Number.parseFloat(value) % 1 ? "" : ".0"}} <div class="gray-text">12 оценок</div></div>
                </div>
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
                value: 5.0,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
                url: 'https://rest.hackmoscow.rainweb.ru',
                login: 'max@hm.ru',
                password: 'maxx',
                "id": "",
                "email": "",
                "status": "",
                "balance": "",
                "profile": {
                    "name": "",
                    "avatar": "",
                    "nickname": "",
                    "email": "",
                    "site": "",
                    "phone": "",
                    "address": "",
                    "rating_customer": "",
                    "rating_executor": "",
                    "show_walk": "",
                    "show_push": "",
                    "dob": "",
                    "sex": "",
                    "experience_communication": ""
                },
                pets: [],
            }
        },
        methods: {
            editProfile() {
                this.$router.push({name: 'profileEdit'});
            },
        },
        created() {
            axios({
                method: 'POST',
                url: this.url + '/auth/login',
                data: {
                    login: this.login,
                    password: this.password,
                },
            }).then(({ data }) => {
                window.localStorage.setItem('userToken', data.data.token);
                window.console.log(window.localStorage.getItem('userToken'));
                axios({
                    method: 'POST',
                    url: this.url + '/user/get/self',
                    data: {
                        token: window.localStorage.getItem('userToken'),
                    }
                })
                    .then(({ data }) => {
                    const user = data.data;
                    this.id = user.id;
                    this.email = user.email;
                    this.status = user.status;
                    this.balance = user.balance;
                    this.profile = user.profile;
                    this.profile.name = user.profile.name;
                    this.profile.avatar = user.profile.avatar;
                    this.profile.nickname = user.profile.nickname;
                    this.profile.email = user.profile.email;
                    this.profile.site = user.profile.site;
                    this.profile.phone = user.profile.phone;
                    this.profile.address = user.profile.address;
                    this.profile.rating_customer = user.rating_customer;
                    this.profile.rating_executor = user.rating_executor;
                    this.profile.show_walk = user.show_walk;
                    this.profile.show_push = user.show_push;
                    this.profile.dob = user.dob;
                    this.profile.sex = user.sex;
                    this.profile.experience_communication = user.experience_communication;
                });
                axios({
                    method: 'POST',
                    url: this.url + '/pet/all',
                    data: {
                        login: this.login,
                        password: this.password,
                    },
                }).then(({ data }) => {
                    this.pets = data.data;
                });
            })
        }
    };
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .rating-value .gray-text {
        margin-left: 7px;
    }
    .rating-value {
        display: flex;
        margin-top: 10px;
        margin-right: 12px;
        color: #6074E8;
    }
    h3 {
        margin-bottom: 0;
        text-align: left;
    }
    .profile-rating >>>.el-rate__icon{
        font-size: 28px;
    }
    .profile-rating {
        height: 30px;
        display: flex;
        align-items: center;
    }
    .add-pet-text {
        display: flex;
        flex-direction: column;
    }
    .text {

    }
    .gray-text {
        color: #989DAC;

    }
    >>>.el-card {
        border-radius: 8px;
        padding: 0;
    }
    
    >>>.el-card:first-of-type {
        padding: 10px;
    }

    >>>.el-card:not(:first-of-type) {
        margin-top: 32px;
    }
    >>>.el-button {
        width: 48px;
        height: 48px;
    }
    .add-pet {
        margin-top: 32px;
        height: 140px;
        background: #EDEEF0;
        border: 1px dashed #989DAC;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
    }
    >>>.el-card__body {
        padding-left: 10px;
        padding-top: 17px;
    }

    >>>.pet-profile-header > .el-card__body {
        display: flex;
        justify-content: space-between;
        padding: 0;
    }

    .pet-photo-wrapper {
        display: inline-flex;
        position: relative;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(22, 36, 83, 0.3);
        margin: auto;
        margin-left: 5px;
    }
    
    .pet-photo {
        width: 100%;
        border-radius: 50%;
    }

    .pet-profile-header__user {
        width: 200px;
    }

    .pet-profile-header__user > *{
        text-align: left;
    }

    .pet-profile-header__user-name {
        margin: 0;
        text-align: left;
    }

    .profile-name {
        margin-bottom: 5px;
    }


    .td--right {
        width: 210px;
        height: 44px;
        text-align: left;
        line-height: 44px;
        border-bottom: 1px solid #DFE1E5;
    }

    .link-btn-wrapper {
        margin-top: 5px;
    }

    .link-btn {
        text-decoration: none;
        color: #6074E8;
    }

    .pet-logo-wrapper {
        width: 48px;
        height: 48px;
    }

    .box-card__title {
        margin: 0;
        text-align: left;
    }

    .pet-type {
        text-align: left;
        margin-top: 5px;
    }


</style>