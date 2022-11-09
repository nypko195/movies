<template>
    <div class="wrapper">
        <TheHeader @reset-page="resetPage" @change-film-name="changeFilmName" />

        <PageFilms ref="page" :film-name-from-search="filmNameFromSearch" />

        <TheFooter />
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
            filmNameFromSearch: '',
        };
    },

    methods: {
        changeFilmName(name) {
            this.filmNameFromSearch = name;
        },

        resetPage() {
            this.$refs.page.getFilms();
        },
    },
};
</script>

<style lang="scss">
@import 'normalize-scss';
@import './styles/bundle.scss';

html {
    font-family: 'Roboto Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.01em;
}

body {
    height: 100vh;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

p {
    margin-top: 0;
    margin-bottom: 0;
}

ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
}

li {
    list-style: none;
}

input,
optgroup,
select,
textarea {
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

button {
    padding: 0;
    border: none;
    background: transparent;
    outline: none;
    font-family: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
}

.wrapper {
    background-color: $bg-main;
    margin: 0 auto;
}

.title {
    font-size: 2.8rem;
}

.text {
    font-size: 1.6rem;
    line-height: 2rem;
}

.button-pagination {
    position: absolute;
    width: 10rem;
    height: 3rem;
    background-color: $green;
    border: none;
    color: $white;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        top: -2px;
    }
}

.button {
    display: inline-block;
    padding: 20px;
    background-color: $green;
    border: none;
    color: $white;
    font-size: 1.6rem;
    font-weight: 700;
    opacity: 0.9;
    transition: all 0.5s ease;

    &:hover {
        border-radius: 24px;
        opacity: 1;
    }
}

._locked {
    overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
