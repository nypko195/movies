<template>
    <Loader v-if="isShowLoader"/>

    <div v-else class="found">
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
                    v-if="film.small_poster"
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

                <span class="found-film__year _mobile">{{ film.year }}</span>

                <div class="found-film__info">
                    <h3 class="found-film__name title">
                        {{film.name_russian }}
                    </h3>
                    <p class="found-film__year text">
                        Год выхода: {{ film.year}}
                    </p>
                    <p v-if="film.description" class="found-film__description text">
                        Описание: {{ normalizeDescription(film.description) }}
                        <span v-if="mq.current === 'sm' && film.description.length > 300">посмотреть полное описание</span>
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

export default {
    name: 'foundFilms',

    inject: ['mq'],

    components: {
        Loader,
        ButtonClose,
    },

    props: {
        isShowLoader: {
            type: Boolean,
            default: false,
        },

        foundFilms: {
            type: Boolean,
            default: () => ([]),
        },
    },

    computed: {
        title() {
            return Object.keys(this.foundFilms).length ? 'Найденные фильмы:' : 'К сожалению, по вашему запросу ничего не найдено...';
        },
    },

    methods: {
        normalizeDescription(description) {
            if (this.mq.current === 'sm' && description.length > 300) {
                return `${description.substring(0, 300)}...`; 
            } else {
                return description; 
            }            
        },
    }
}
</script>

<style lang="scss" scoped>
.found {
    position: relative;
    width: 100%;
    padding: 1rem 5rem;

    @include respond-to(xs) {
        padding: 1rem 4rem;
    }

    &-result { 
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 2rem;
        font-weight: 500;

        @include respond-to(xs) {
            font-size: 2.4rem;
        }
    }

    &-close {
        top: -12px;
        right: 30px;

        @include respond-to(md) {
            top: -12px;
            right: 3px;
        }

        @include respond-to(sm) {
            right: 2px;
        }

        @include respond-to(xs) {
            top: -15px;
            right: 3px;
        }
    }

    &-list {
        display: flex;
        flex-direction: column;
    }

    &-film {
        display: flex;
        position: relative;
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: auto;
        border: 1px solid $border-main;
        border-radius: 6px;

        @include respond-to(xs) {
            flex-direction: column;
        }

        &:first-child {
            margin-top: 0;
        }

        &__info {
            display: flex;
            flex-direction: column;
            margin: 1rem 3rem;
            
            @include respond-to(xs) {
                margin: 0;
            }
        }

        &__poster {
            min-width: 25rem;
            width: 25rem;
            min-height: 35rem;
            max-height: 35rem;

            @include respond-to(xs) {
                width: 100%;
            }
        }

        &__name {
            margin-bottom: 2rem;

            @include respond-to(xs) {
                display: none;
            }
        }

        &__year {
            @include respond-to(xs) {
                display: none;
            }

            &._mobile {
                display: block;
                position: absolute;
                bottom: 5%;
                left: 25px;
                padding: 5px;
                background-color: $green;    
                color: $white;
                font-size: 1.6rem;
                font-weight: 700;
            }
        }

        &__description {
            @include respond-to(sm) {
                // max-height: 4rem;
                // overflow: hidden;
            }

            @include respond-to(xs) {
                display: none;
            }

            & > span {
                color: #4a9999;
            }
        }
    }
}
</style>