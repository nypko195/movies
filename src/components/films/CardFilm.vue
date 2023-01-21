<template>
    <div class="card-film">
        <img :src="film.small_poster" class="card-film__poster" :alt="film.name" />
        <div class="card-film__info">
            <h2 class="card-film__title">
                {{ film.name_russian }} ({{ film.year }}) смотреть онлайн
            </h2>

            <ul class="card-film__params">
                <li class="card-film__param text">
                    Название: {{ film.name_russian }}
                </li>
                <li class="card-film__param text">
                    Страна: {{ film.country_ru }}
                </li>
                <li class="card-film__param text">
                    Год выхода: {{ film.year }}
                </li>
                <li class="card-film__param text">
                    Описание: {{ film.description }}
                </li>
            </ul>
        </div>

        <ButtonClose class="card-film__close" @click="close" />
    </div>
</template>

<script>
import ButtonClose from '../ui/ButtonClose.vue';

export default {
    name: 'CardFilm',

    components: {
        ButtonClose,
    },

    props: {
        sourceFilm: {
            type: String,
            required: true,
        },
    },

    computed: {
        film() {
            return JSON.parse(this.sourceFilm);
        },
    },

    methods: {
        close() {
            this.$router.push('/');
        },
    },
};
</script>

<style lang="scss" scoped>
.card-film {
    display: flex;
    position: relative;
    width: 100%;
    padding: 1rem 5rem 3rem;

    @include respond-to(sm) {
        flex-direction: column;
        overflow-y: auto;
    }

    @include respond-to(xs) {
        padding: 1rem 1rem 2rem;
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
        top: -5px;
        right: 38px;

        @include respond-to(md) {
            top: -12px;
            right: 3px;
        }

        @include respond-to(sm) {
            right: 2px;
        }

        @include respond-to(xs) {
            top: -15px;
            right: 0;
        }
    }

    &__param {

        &:nth-child(n + 2) {
            margin-top: 12px;
        }
    }
}
</style>
