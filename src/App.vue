<template>
    <div class="wrapper">
        <TheHeader @search="getAndSetNameFilm(nameFilm = $event)"/>

        <PageFilms :name-film="nameFilm"/>

        <TheFooter/>
    </div>
</template>

<script>
// components
import TheHeader from './components/layout/TheHeader.vue';
import PageFilms from './pages/films/PageFilms.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
    name: 'App',

    components: {
        TheHeader,
        PageFilms,
        TheFooter,
    },

    data() {
        return {
            nameFilm: '',
        };
    },
}
</script>

<style lang="scss">
@import "./styles/bundle.scss";

.wrapper {
    background-color: $bg-main;
    margin: 0 auto;
}

.title {
    font-size: 2.8rem;
}

.text {
    font-size: 1.6rem;
}
</style>
