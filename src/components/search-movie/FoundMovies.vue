<template>
    <Loader v-if="isShowLoader"/>

    <div v-if="!isShowLoader" class="found">
        <div class="found-result title">
            {{ title }}

            <router-link :to="{ name: 'pageMovies' }">
                <ButtonClose 
                    class="found-close"
                    @click="close"
                />
            </router-link>
        </div>

        <div class="found-list">        
            <router-link 
                v-for="item in foundMovie"
                :key="item.id"
                class="found-item"
                :to="{ name: 'сardMovies', params: { page: 1, id: 1, movie: JSON.stringify(item) } }"
                @click="close"
            >
                <img 
                    v-if="item.small_poster"
                    class="found-item__poster" 
                    :src="item.small_poster" 
                    alt=""
                >
                <img 
                    v-else
                    class="found-item__poster" 
                    src="../../assets/images/found-movies/no-foto.png" 
                    alt=""
                >

                <div class="found-item__info">
                    <h3 class="found-item__name title">
                        {{item.name_russian }}
                    </h3>
                    <p class="found-item__year text">
                        Год выхода: {{ item.year}}
                    </p>
                    <p v-if="item.description" class="found-item__description text">
                        Описание: {{ item.description }}
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
import { api } from '../../api/constants.js';

export default {
    name: 'foundMovies',

    components: {
        Loader,
        ButtonClose,
    },

    props: {
        nameMovie: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            foundMovie: [],
            isShowLoader: false,
        };
    },

    computed: {
        title() {
            return Object.keys(this.foundMovie).length ? 'Найденные фильмы' : 'К сожалению, по вашему запросу ничего не найдено...';
        }
    },

    async mounted() {
        await this.getFoundMovie();
    },

    methods: {
        async getFoundMovie() {
            this.isShowLoader = true;
            if (!this.nameMovie) {
                this.isShowLoader = false;
                return;
            }

            let resp = await fetch(`${api.urlMoviesSearchApi}${this.normalizedNameMovie()}`);
            let foundMovie = await resp.json(); 

            this.foundMovie = foundMovie.data;
            this.isShowLoader = false;
        },

        normalizedNameMovie() {
            return this.nameMovie.toLowerCase().trim();
        }, 
    }
}
</script>

<style lang="scss" scoped>
.found {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 5rem;
    background-color: $bg-block;
    border-radius: 5px;

    @include respond-to(lg) {
        max-width: 100%;
        margin: 0 10rem;
        margin-top: 10px;
        margin-bottom: 10px;
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
}

.found-result { 
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
}

.found-close {
    top: 10px;
    right: -20px;

    @include respond-to(sm) {
        right: 0;
    }
}
.found-list {
    display: flex;
    flex-direction: column;
    justify-content: start;
}
.found-item {
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
        margin: 0 3rem;            
    }

    &__name {
        margin-bottom: 2rem;
    }
}
</style>