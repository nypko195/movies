<template>
    <div class="card-film">
        <img class="card-film__poster" :src="cardFilm.small_poster" alt="">
        <div class="card-film__info">
            <h2 class="card-film__title">{{ cardFilm.name_russian }} ({{ cardFilm.year }}) смотреть онлайн</h2>

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
</template>

<script>
// components
import ButtonClose from '../ui/ButtonClose.vue';

export default {
    name: 'CardFilm',

    inject: ['mq'],

    components: {
        ButtonClose,
    },

    props: {
        film: {
            type: String,
            required: true,
        },
    },

    computed: {
        cardFilm() {
            return JSON.parse(this.film);
        },

        isMobile() {
            return this.mq.current === 'zero';
        },
    },

    mounted() {
        if (this.isMobile) {
            this.scrollToTop();
        }
    },

    methods: {
        close() {
            this.$router.push('/');
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
    }
}
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
}
</style>