<template>    
    <div class="card"
            v-for="item in list.data"
            :key="item.id"
    >            
        <img class="poster" :src="item.small_poster">
        <h3 class="name">{{ item.name_russian }}</h3>
    </div>    
</template>

<script>
export default {
    name: 'Card',

    props: {
        list: {
            type: Array,
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-row {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        position: relative;
        flex: 0 0 15%;
        margin-right: 10px;
    }

    .poster {
        width: 100%;
        height: 75%
    }

    .name {
        text-align: center;
        color: #fff;
    }
</style>