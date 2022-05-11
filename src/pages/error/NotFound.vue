<template>
    <div class="not-found">
        <div class="not-found__title">
            404
        </div>

        <div class="not-found__subtitle">
            Что-то пошло не так! Страница, которую вы запросили не существует.
        </div>

        <router-link :to="{ name: 'listFilms' }" class="not-found__button button">
            Вернуться на главную
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
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
    }
}
</style>