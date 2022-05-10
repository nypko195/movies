<template>
    <div class="card-movies">
        <div class="container">
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

                <ButtonClose @click="$router.go(-1)" class="card-movies__close" /> 
            </div>
        </div>
    </div>
</template>

<script>
// components
import ButtonClose from '../ui/ButtonClose.vue';

export default {
    name: 'CardMovie',

    components: {
        ButtonClose,
    },

    props: {
        movie: {
            type: String,
            default: '',
        }
    },

    computed: {
        cardMovie() {
            return JSON.parse(this.movie);
        }
    },
}
</script>

<style lang="scss" scoped>
.card-movies {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    max-width: 110rem;
    min-height: 61rem;
    height: auto;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 1rem 5rem;
    background-color: $bg-block;
    border-radius: 5px; 

    @include respond-to(lg) {
        max-width: 100%;
        margin: 10px 10rem;
    }

    @include respond-to(md) {
        margin: 10px 2rem;
        min-height: 35rem;
    }

    @include respond-to(sm) {
        min-height: 30rem;
    }

    &__row {
        display: flex;
        position: relative;
        // margin: 0 5rem;

        @include respond-to(sm) {
            flex-direction: column; 
            // margin: 0 2rem;
        }
    }

    &__poster {
        height: 30rem;

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
        display: flex;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        text-align: center;

        @include respond-to(sm) {
            margin-bottom: 1rem; 
        }
    }

    &__subtitle {
        text-decoration: underline;
    }

    &__close {
        top: 10px;
        right: -20px;

        @include respond-to(sm) {
            right: 0;
        }
    }

    .text {
        font-size: 1.6rem;
    }
}
</style>