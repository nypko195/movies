<template>
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
    }
    .header-logo {
        color: #000;
        font-size: 36px;
    }
    .header-search {
        height: 2rem;
        padding: 2rem;
        border: 1px solid #b0b1b4;
        border-radius: 5px;
    }
</style>