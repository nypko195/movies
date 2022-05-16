<template>
    <div class="card-film">
        <div class="container">
            <div class="card-film__row">
                <img class="card-film__poster" :src="cardFilm.small_poster" alt="">
                <div class="card-film__info">
                    <h3 class="card-film__title">{{ cardFilm.name_russian }} ({{ cardFilm.year }}) смотреть онлайн</h3>
                    <p class="card-film__name text">
                        <span class="card-film__subtitle">Название:</span> {{ cardFilm.name_russian }}
                    </p>
                    <p class="card-film__country text">
                        <span class="card-film__subtitle">Страна:</span> {{ cardFilm.country_ru }}
                    </p>
                    <p class="card-film__year text">
                        <span class="card-film__subtitle">Год выхода:</span> {{ cardFilm.year }}
                    </p>                    
                    <p class="card-film__description text">
                        <span class="card-film__subtitle">Описание:</span> {{ cardFilm.description }}
                    </p>
                </div>

                <ButtonClose @click="$router.go(-1)" class="card-film__close" /> 
            </div>
        </div>
    </div>
</template>

<script>
// components
import ButtonClose from '../ui/ButtonClose.vue';

export default {
    name: 'CardFilm',

    components: {
        ButtonClose,
    },

    props: {
        film: {
            type: String,
            default: '',
        }
    },

    computed: {
        cardFilm() {
            return JSON.parse(this.film);
        }
    },
}
</script>

<style lang="scss" scoped>
.card-film {
    width: 100%;
    padding: 1rem 5rem;

    @include respond-to(sm) {
        overflow-y: auto;
    }

    @include respond-to(xs) {
        padding: 1rem 1rem;
    }

    &__row {
        display: flex;
        position: relative;

        @include respond-to(sm) {
            flex-direction: column; 
        }
    }

    &__poster {
        height: 30rem;

        @include respond-to(sm) {
            width: 33rem;
            height: 45rem;   
        }
    }

    &__info {
        margin-left: 3rem;

        @include respond-to(sm) {
            margin-top: 2rem;
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

        @include respond-to(xs) {
            top: 1px;
            right: 1px;
        }
    }
}
</style>