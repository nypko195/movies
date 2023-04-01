<template>
    <div class="error">
        <div class="error__title">
            {{ title }}
        </div>

        <div class="error__subtitle">
            {{ message }}
        </div>

        <router-link
            v-if="!err"
            :to="{name: 'listFilms'}"
            class="error__button button"
        >
            Вернуться на главную
        </router-link>

        <button v-else class="error__button button" @click="reloadPage">
            Попробуйте снова
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Error',

        props: {
            err: {
                type: String,
                default: '',
            },
        },

        computed: {
            title() {
                return this.err ? 'Упс' : '404';
            },

            message() {
                return this.err
                    ? 'Что-то пошло не так!'
                    : 'Что-то пошло не так! Страница, которую вы запросили не существует';
            },
        },

        methods: {
            reloadPage() {
                location.reload();
            },
        },
    };
</script>

<style lang="scss" scoped>
    .error {
        width: 100%;
        padding: 1rem 5rem;

        &__title {
            font-size: 12rem;
            font-weight: 700;
        }

        &__subtitle {
            font-size: 2rem;
            font-weight: 700;
        }

        &__button {
            margin-top: 5rem;
            cursor: pointer;
            user-select: none;
        }
    }
</style>
