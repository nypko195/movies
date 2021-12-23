<template>
    <div class="bg"></div>   
    <div class="header">       
        <a href="" class="header-logo">Movies</a>
        <input class="header-search" placeholder="Введите название"/>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
    .bg {
        display: block;
        height: 28rem;
        background-image: url('../../assets/bg-main/bg.jpg');
        background-repeat: no-repeat;
        background-position: top;

        @include respond-to(lg) {
            background-size: cover;
            margin: 0 10rem;
        }

        @include respond-to(md) {
            display: none;
            margin: 0;
        }
    }
    .header {
        display: flex;
        max-width: 110rem;
        height: 6.5rem;
        margin: 0 auto;
        padding: 0 10rem;
        justify-content: space-between;
        align-items: center;   
        background-color: $white;
        border-radius: 5px;

        @include respond-to(lg) {
            max-width: 100%;
            margin: 0 10rem;
        }

        @include respond-to(md) {
            padding: 0 3rem;
        }

        @include respond-to(sm) {
            height: auto;
            flex-direction: column;
            justify-content: center;
        }
    }
    .header-logo {
        color: $logo;
        font-size: 36px;
    }
    .header-search {
        height: 2rem;
        padding: 2rem;
        border: 1px solid #b0b1b4;
        border-radius: 5px;

        @include respond-to(sm) {
            margin: 2rem 0;
            width: 100%;
        }
    }
</style>