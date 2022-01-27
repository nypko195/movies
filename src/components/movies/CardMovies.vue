<template>
    <div class="container">
        <div 
            class="card-movies"
        >
            <div class="card-movies__row">
                <img class="card-movies__poster" :src="cardMovie.small_poster" alt="">
                <div class="card-movies__info">
                    <h3 class="card-movies__title">{{ cardMovie.name_russian }} ({{ cardMovie.year }}) смотреть онлайн</h3>
                    <p class="card-movies__name text">
                        <span class="card-movies__subtitle">Название:</span> {{ cardMovie.name_russian }}
                    </p>
                    <p class="card-movies__country text">
                        <span class="card-movies__subtitle">Страна:</span> {{ cardMovie.country_ru }}
                    </p>
                    <p class="card-movies__year text">
                        <span class="card-movies__subtitle">Год выхода:</span> {{ cardMovie.year }}
                    </p>                    
                    <p class="card-movies__description text">
                        <span class="card-movies__subtitle">Описание:</span> {{ cardMovie.description }}
                    </p>
                </div>

                <ButtonClose 
                    @click="backMainPage"
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
            backMainPage() {
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

        @include respond-to(sm) {
            padding-bottom: 2rem;    
        }

        &__row {
            display: flex;
            position: relative;
            margin: 0 5rem;

            @include respond-to(sm) {
                flex-direction: column; 
                margin: 0 2rem;
            }
        }

        &__poster {
            height: 40rem;

            @include respond-to(sm) {
                width: 15rem;
                height: 20rem;   
                margin: 0 auto;
            }
        }

        &__info {
            margin-left: 3rem;

            @include respond-to(sm) {
                margin-left: 0;
            }
        }

        &__title {
            max-width: 55rem;
            margin-bottom: 5rem;
            font-size: 3rem;
            text-align: center;

            @include respond-to(sm) {
                margin-bottom: 1rem; 
            }
        }

        &__subtitle {
            text-decoration: underline;
        }

        &__close {
            top: 20px;
            right: -4rem;

            @include respond-to(sm) {
                right: 0;
            }
        }

        .text {
            font-size: 1.6rem;
        }
    }
</style>