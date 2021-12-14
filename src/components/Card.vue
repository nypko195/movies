<template>    
    <div class="card"
            v-for="item in list.data"
            :key="item.id"
    >            
        <img class="poster" :src="item.small_poster"/>
        <span class="year">{{ item.year }}</span>
    </div>    
</template>

<script>
export default {
    name: 'Card',

    props: {
        list: {
            type: Object,
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        position: relative;
        flex: 0 0 15%;
        margin-right: 1.5rem;
        margin-bottom: 1rem;
    }

    .poster {
        width: 17rem;
        height: 25rem;
    }

    .year {
        position: absolute;
        bottom: 7%;
        left: 10%;
        padding: 5px;
        background-color: #4a9999;    
        color: #fff;
        font-size: 1.6rem;
    }
</style>