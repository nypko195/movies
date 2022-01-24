<template>
    <div class="container">
        <div 
            class="card-movies"
        >
            <div class="card-movies__row">
                <img class="card-movies__poster" :src="cardMovie.small_poster" alt="">
                <div class="card-movies__info">
                    <h3 class="card-movies__title">{{ cardMovie.name_russian }} ({{ cardMovie.year }}) смотреть онлайн</h3>
                    <p class="card-movies__name text">Название: {{ cardMovie.name_russian }}</p>
                    <p class="card-movies__country text">Страна: {{ cardMovie.country_ru }}</p>
                    <p class="card-movies__year text">Год выхода: {{ cardMovie.year }}</p>                    
                    <p class="card-movies__description text">Описание: {{ cardMovie.description }}</p>
                </div>

                <ButtonClose 
                    @click="goToMainPage"
                    class="card-movies__close"
                />            
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonClose from '../ui/ButtonClose.vue';

    export default {
        name: 'CardMovies',

        components: {
            ButtonClose,
        },

        props: {
            movie: {
                type: String,
            }
        },

        computed: {
            cardMovie() {
                return JSON.parse(this.movie);
            }
        },

        methods: {
            goToMainPage() {
                this.$router.push({ name: 'pageMovies'});
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

        @include respond-to(lg) {
            margin: 10px 10rem 10px;
        }

        @include respond-to(md) {
            margin: 10px 2rem 10px;    
        }

        &__row {
            display: flex;
            position: relative;
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

        &__close {
            top: 20px;
            right: -4rem;
        }

        .text {
            font-size: 1.6rem;
        }
    }
</style>