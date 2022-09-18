<template>
    <div class="card-film">
        <div class="card-film__row">
            <img class="card-film__poster" :src="cardFilm.small_poster" alt="">
            <div class="card-film__info">
                <h3 class="card-film__title">{{ cardFilm.name_russian }} ({{ cardFilm.year }}) смотреть онлайн</h3>
                <p class="card-film__name text">
                    <span class="card-film__subtitle"><span>Название</span>:</span> {{ cardFilm.name_russian }}
                </p>
                <p class="card-film__country text">
                    <span class="card-film__subtitle"><span>Страна</span>:</span> {{ cardFilm.country_ru }}
                </p>
                <p class="card-film__year text">
                    <span class="card-film__subtitle"><span>Год выхода</span>:</span> {{ cardFilm.year }}
                </p>                    
                <p v-if="cardFilm.description" class="card-film__description text">
                    <span class="card-film__subtitle"><span>Описание</span>:</span> {{ cardFilm.description }}
                </p>
            </div>

            <ButtonClose @click="close" class="card-film__close" /> 
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
        },

        isListFilms: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        cardFilm() {
            return JSON.parse(this.film);
        }
    },

    methods: {
        close() {
            if (this.isListFilms) {
                this.$router.go(-1);
            } else {
                this.$router.push({ path: '/films/?page=1'});
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card-film {
    width: 100%;
    padding: 1rem 5rem 3rem;

    @include respond-to(sm) {
        overflow-y: auto;
    }

    @include respond-to(xs) {
        padding: 1rem 1rem 2rem;
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
            width: 50%;
            height: 35rem;  
        }

        @include respond-to(xs) {
            width: 100%;
            padding: 0 4rem;
            height: 35rem;  
        }
    }

    &__info {
        margin-left: 3rem;

        @include respond-to(sm) {
            margin-top: 2rem;
            margin-left: 0;
        }

        @include respond-to(xs) {
            padding: 0 1rem 1rem;
        }
    }

    &__title {
        display: flex;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        text-align: left;

        @include respond-to(sm) {
            margin-bottom: 1rem; 
        }
    }

    &__close {
        top: -22px;
        right: -20px;

        @include respond-to(md) {
            top: -28px;
            right: -47px;
        }

        @include respond-to(sm) {
            top: -25px;
        }

        @include respond-to(xs) {
            top: -25px;
            right: -7px;
        }
    }
}
</style>