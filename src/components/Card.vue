<template>
    <div class="card-row">
        <div class="card"
             v-for="item in list"
             :key="item.id"
        >            
            <img class="poster" :src="item.big_poster">   
            <h2 class="title">{{ item.name_russian }}</h2>        
        </div>        
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
        width: 300px;
        height: 350px;
        border: 1px solid green;
    }

    .title {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .poster {
        width: 100%;
        height: 100%;
    }
</style>