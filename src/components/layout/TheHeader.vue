<template>
    <div class="header">
        <div class="header__picture"></div>

        <section class="header__content">
            <router-link :to="{ name: 'listFilms' }" class="header__logo" @click="goToFirstPage">Films</router-link>
            <div class="header-search__box">
                <input 
                    class="header-search__input"
                    type="text" 
                    placeholder="Введите название" 
                    v-model.trim="searchNameFilm"
                    @keyup.enter="emitTitleFilm"
                />

                <div 
                    class="header-search__button"
                    @click="emitTitleFilm"
                >                
                </div> 
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',

    emits: ['search', 'to-first-page'],

    data() {
        return {
            searchNameFilm: '',
        };
    },

    computed: {
        isNameFilmLength() {
            return this.searchNameFilm.length;
        }
    },

    methods: {
        emitTitleFilm() {
            if (!this.isNameFilmLength) return;

            this.$router.push({ name: 'foundFilms' });
            this.$emit('search', this.searchNameFilm);
            this.searchNameFilm = '';
        },

        goToFirstPage() {
            this.$emit('to-first-page');
        },
    }
}
</script>

<style lang="scss" scoped>
.header {
    &__picture {
        display: block;
        height: 28rem;
        background-image: url('../../assets/header-bg/bg.jpg');
        background-repeat: no-repeat;
        background-position: top;

        @include respond-to(lg) {
            background-size: cover;
            margin: 0 10rem;
        }

        @include respond-to(md) {
            display: none;
            margin: 0;
        }
    }

    &__content {
        display: flex;
        position: relative;
        max-width: 110rem;
        height: 6.5rem;
        margin: 0 auto;
        padding: 0 5rem;
        justify-content: space-between;
        align-items: center;   
        background-color: $white;
        border-radius: 5px;

        @include respond-to(lg) {
            max-width: 100%;
            margin: 0 10rem;
        }

        @include respond-to(md) {
            margin: 0 2rem;
            padding: 0 1rem;    
        }

        @include respond-to(sm) {
            height: auto;
        }
    }

    &__logo {
        color: $logo;
        font-size: 36px;
        font-weight: 700;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }

    &-search {
        &__box {
            display: flex;
            position: relative;
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
            right: 10%;
            width: 4rem;
            height: 4rem; 
            cursor: pointer;
            
            &:after {
                content: '';
                position: absolute;
                top: 22%; 
                left: 78%;
                width: 60%;
                height: 60%;
                background-image: url('../../assets/search.svg');
                background-repeat: no-repeat;

                @include respond-to(md) {
                    left: 15%;
                }

                @include respond-to(sm) {
                    top: 70%;
                    left: 20%;
                }
            }
        }
    }
}
</style>