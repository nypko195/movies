<template>
    <div class="search-box" :class="classes">
        <input
            v-model.trim="filmNameFromSearch"
            class="search-box__input"
            type="text"
            placeholder="Введите название"
            @keyup.enter="setNameFilm"
        />

        <button class="search-box__button" @click="setNameFilm"></button>
    </div>
</template>

<script>
export default {
    name: 'SearchBox',

    props: {
        isMenu: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['change-film-name'],

    data() {
        return {
            filmNameFromSearch: '',
        };
    },

    computed: {
        classes() {
            return {
                '_menu': this.isMenu,
            };
        },
    },

    methods: {
        setNameFilm() {
            this.$emit('change-film-name', this.filmNameFromSearch);

            this.resetNameFilm();
        },

        resetNameFilm() {
            this.filmNameFromSearch = '';
        },
    },
};
</script>

<style lang="scss" scoped>
.search-box {
    position: relative;

    @include respond-to(sm) {
        display: none;
    }

    &._menu {
        @include respond-to(sm) {
            display: block;
        }
    }

    &__input {
        position: relative;
        height: 2rem;
        padding: 2rem;
        border: 1px solid $border-main;
        border-radius: 5px;
        transition: all .5s ease;

        &:hover {
            border-radius: 24px;
        }

        @include respond-to(sm) {
            margin: 2rem 0;
            width: 100%;
        }
    }

    &__button {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 10%;
        width: 4rem;
        height: 4rem;
        cursor: pointer;

        @include respond-to(sm) {
            right: 4%;
        }

        @include respond-to(xs) {
            right: 7.5%;
        }

        &:after {
            content: "";
            position: absolute;
            top: 22%;
            left: 78%;
            width: 60%;
            height: 60%;
            background-image: url("../../assets/search.svg");
            background-repeat: no-repeat;

            @include respond-to(md) {
                left: 80%;
            }

            @include respond-to(sm) {
                top: 70%;
            }
        }
    }
}
</style>
