<template>
    <Loader v-if="isShowLoader"/>

    <div v-if="!isShowLoader" class="found">
        <div class="found-result title">
            {{ title }}

            <router-link :to="{ name: 'listFilms' }">
                <ButtonClose 
                    class="found-close"
                />
            </router-link>
        </div>

        <div class="found-list">        
            <router-link 
                v-for="film in foundFilms"
                :key="film.id"
                class="found-film"
                :to="{ name: 'сardFilm', params: { page: 1, id: film.id, film: JSON.stringify(film) } }"
            >
                <img 
                    v-if="film.small_poster !== 'https://kinobd.ru'"
                    class="found-film__poster" 
                    :src="film.small_poster" 
                    :alt="film.name_russian"
                >
                <img 
                    v-else
                    class="found-film__poster" 
                    src="../../assets/images/found-films/no-foto.png" 
                    :alt="film.name_russian"
                >

                <div class="found-film__info">
                    <h3 class="found-film__name title">
                        {{film.name_russian }}
                    </h3>
                    <p class="found-film__year text">
                        Год выхода: {{ film.year}}
                    </p>
                    <p v-if="film.description" class="found-film__description text">
                        Описание: {{ film.description }}
                    </p>                
                </div>
            </router-link>        
        </div>
    </div>
</template>

<script>
// components
import Loader from '../ui/Loader.vue';
import ButtonClose from '../ui/ButtonClose.vue'

// function
import { getFoundFilms }  from '../../api/index.js';

export default {
    name: 'foundFilms',

    components: {
        Loader,
        ButtonClose,
    },

    props: {
        searchNameFilm: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            foundFilms: [],
            isShowLoader: false,
        };
    },

    computed: {
        title() {
            return Object.keys(this.foundFilms).length ? 'Найденные фильмы:' : 'К сожалению, по вашему запросу ничего не найдено...';
        },
    },

    async mounted() {
        await this.getFoundFilms();
    },

    methods: {
        async getFoundFilms() {
            if (!this.searchNameFilm) return;
            this.isShowLoader = true;

            this.foundFilms = await getFoundFilms(this.normalizeSearchNameFilm());

            this.isShowLoader = false;
        },

        normalizeSearchNameFilm() {
            return this.searchNameFilm.toLowerCase().trim();
        }, 
    }
}
</script>

<style lang="scss" scoped>
.found {
    width: 100%;
    padding: 1rem 5rem;

    // @include respond-to(lg) {
    //     max-width: 100%;
    //     margin: 0 10rem;
    //     margin-top: 10px;
    //     margin-bottom: 10px;
    // }

    // @include respond-to(md) {
    //     margin: 0 2rem;
    //     padding: 0 1rem;    
    // }

    @include respond-to(sm) {
        overflow-y: auto;
    }

    &-result { 
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
        margin-bottom: 2rem;
    }

    &-close {
        top: 10px;
        right: -20px;

        @include respond-to(sm) {
            right: 0;
        }
    }

    &-list {
        display: flex;
        flex-direction: column;
    }

    &-film {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: auto;
        border: 1px solid $border-main;
        border-radius: 6px;

        &:first-child {
            margin-top: 0;
        }

        &__poster {
            min-width: 25rem;
            width: 25rem;
        }

        &__info {
            display: flex;
            flex-direction: column;
            margin: 1rem 3rem;            
        }

        &__name {
            margin-bottom: 2rem;
        }
    }
}
</style>