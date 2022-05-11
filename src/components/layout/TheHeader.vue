<template>
    <div class="bg"></div>

    <div class="header">       
        <router-link :to="{ name: 'listFilms' }" class="header-logo">Films</router-link>
        <div class="header-search__box">
            <input 
                class="header-search__input"
                type="text" 
                placeholder="Введите название" 
                v-model.trim="search"
                @keyup.enter="emitsTitleFilm"
            />

            <div 
                class="header-search__button"
                @click="emitsTitleFilm"
            >                
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',

    emits: ['search'],

    data() {
        return {
            search: '',
        };
    },

    computed: {
        isNameFilmLength() {
            return this.search.length;
        }
    },

    methods: {
        emitsTitleFilm() {
            if (!this.isNameFilmLength) return;

            this.$router.push({ name: 'outputFilms' });
            this.$emit('search', this.search);
            this.search = '';
        },
    }
}
</script>

<style lang="scss" scoped>
.bg {
    display: block;
    height: 28rem;
    background-image: url('../../assets/bg-main/bg.jpg');
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

.header {
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
        flex-direction: column;
        justify-content: center;
    }

    &-logo {
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