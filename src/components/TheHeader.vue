<template>
    <div class="header-row">
        <h1 class="header-logo">{{ title }}</h1>
        <input class="header-search" placeholder="Введите название">
    </div>
</template>

<script>
export default {
    name: 'TheHeader',

    data() {
        return {
            title: 'Movies',
        }
    }
}
</script>

<style scoped>
    .header-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .header-logo {
        color: #fff;
        font-size: 36px;
    }

    .header-search {
        height: 20px;
        padding: 10px;
    }
</style>