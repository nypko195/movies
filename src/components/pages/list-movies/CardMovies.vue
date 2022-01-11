<template>
    <div class="container">
        <div 
            class="card-movies"
            v-for="card in getCardMovie"
            :key="card.id"
        >
            <div class="card-movies__row">
                <img class="card-movies__poster" :src="card.big_poster" alt="">
                <div class="card-movies__info">
                    <h3 class="card-movies__title"></h3>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardMovies',

    computed: {
        getCardMovie() {
            return this.$store.getters.cardMovies;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>