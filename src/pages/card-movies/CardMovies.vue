<template>
    <div class="container">
        <div 
            class="card-movies"
            v-for="card in getCardMovie"
            :key="card.id"
        >
            <div class="card-movies__row">
                <img class="card-movies__poster" :src="card.small_poster" alt="">
                <div class="card-movies__info">
                    <h3 class="card-movies__title">{{ card.name_russian }} ({{ card.year }}) смотреть онлайн</h3>
                    <p class="card-movies__name text">Название: {{ card.name_russian }}</p>
                    <p class="card-movies__country text">Страна: {{ card.country_ru }}</p>
                    <p class="card-movies__year text">Год выхода: {{ card.year }}</p>                    
                    <p class="card-movies__description text">Описание: {{ card.description }}</p>
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
    .card-movies {    
        max-width: 110rem;
        min-height: 61rem;
        height: auto;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 20px;
        background-color: $bg-block;
        border-radius: 5px;  

        &__row {
            display: flex;
            margin: 0 5rem;
        }

        &__poster {
            height: 40rem;
        }

        &__info {
            margin-left: 3rem;
        }

        &__title {
            margin-bottom: 5rem;
            font-size: 3rem;
            text-align: center;
        }

        .text {
            font-size: 1.6rem;
        }
    }
</style>