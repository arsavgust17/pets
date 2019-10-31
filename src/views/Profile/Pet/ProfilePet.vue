<template>
    <div>

        <div class="link-btn-wrapper--top">
            <a href="#" class="link-btn">Отмена</a>
            <a href="#" class="link-btn">Готово</a>
        </div>

        <el-card class="box-card pet-profile-header">
            <div class="pet-photo-wrapper">
                <img class="pet-photo" src="../../../assets/profile-pet-photo.png" alt="User" />
            </div>
            <div class="pet-profile-header__user">
                <div class="td--right">
                    <h1 class="pet-profile-header__user-name">Хатико</h1>
                </div>
                <div class="td--right">Собака</div>
            </div>
        </el-card>

        <el-card class="box-card pet-profile-data">
            <h3 class="box-card__title">Данные питомца</h3>
            <div class="row">
                <div class="td--left">Порода</div>
                <div class="td--right">Бультерьер</div>
            </div>
            <div class="row">
                <div class="td--left">Возраст</div>
                <div class="td--right">5 лет</div>
            </div>
            <div class="row">
                <div class="td--left">Пол</div>
                <div class="td--right">Мужской</div>
            </div>
            <div class="row">
                <div class="td--left">Время выгула</div>
                <div class="td--right">30 мин</div>
            </div>
            <div class="row">
                <div class="td--left">Характер</div>
                <div class="td--right">Игривый</div>
            </div>
            <label for="comment-field" class="comment-field-header">
                Дополнительные комментарии
            </label>
            <textarea id="comment-field" name="comment-field" class="comment-field">Очень подвижный, дружелюбный, &#173; не может жить без активных игр.
            </textarea>
        </el-card>
        <Button class="add-walk-btn">Добавить прогулку</Button>
        <el-card class="box-card story">
            <h3 class="box-card__title">История прогулок</h3>
            <p class="box-card__p">Данные за последний месяц</p>
            <div class="arrow"></div>
        </el-card>
        <div class="link-btn-wrapper--bottom">
            <a href="#" class="link-btn">Удалить профиль питомца</a>
        </div>
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

    .link-btn-wrapper--top {
        display: flex;
        justify-content: space-between;
    }

    >>>.el-card__body {
        padding: 19px 0 19px 21px;
    }

    .pet-profile-header {
        margin-top: 27px;
    }

    >>>.pet-profile-header > .el-card__body {
        display: flex;
        justify-content: space-between;
    }

    .pet-photo-wrapper {
        display: inline-flex;
        position: relative;
        width: 72px;
        height: 72px;
        border: 3px solid #fff;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(22, 36, 83, 0.3);
        margin: auto 0;
    }

    .pet-photo {
        width: 100%;
        border-radius: 50%;
    }

    .pet-photo-wrapper::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        display: block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #fff url('../../../assets/plus.png') center no-repeat;
        box-shadow: 0px 10px 34px rgba(22, 36, 83, 0.2);
    }

    .pet-profile-header__user {
        width: 210px;
    }

    .pet-profile-header__user-name {
        margin: 0;
    }

    .pet-profile-data {
        margin-top: 10px;
    }

    .box-card__title {
        margin: 0;
        text-align: left;
    }

    .row {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
    }

    .td--right {
        width: 210px;
        height: 44px;
        text-align: left;
        line-height: 44px;
        border-bottom: 1px solid #DFE1E5;
    }

    .td--left {
        text-align: left;
        line-height: 44px;
        font-size: 14px;
    }

    .comment-field-header {
        display: flex;
        margin-top: 17px;
        text-align: left;
        font-size: 14px;
    }

    .comment-field {
        width: 100%;
        resize: none;
        border: none;
        border-bottom: 1px solid #DFE1E5;
        padding: 8px 30px 10px 1px;
        font-size: 16px;
        color: #989DAC;
        opacity: 0.8;
        outline: 0;
    }

    .add-walk-btn {
        width: 100%;
        height: 61px;
        margin-top: 25px;
        font-size: 18px;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: #6074E8;
    }

    .box-card__p {
        margin: 0;
        margin-top: 5px;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
    }

    .story {
        margin-top: 18px;
    }

    >>>.story > .el-card__body {
        position: relative;
    }

    .arrow {
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -5px;
        width: 10px;
        height: 10px;
        border-right: 1.5px solid #989DAC;
        border-top: 1.5px solid #989DAC;
        transform: rotate(45deg);
    }

    .link-btn {
        text-decoration: none;
        color: #6074E8;
    }

    .link-btn-wrapper--bottom {
        margin-top: 30px;
    }

</style>