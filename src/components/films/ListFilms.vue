<template>
    <Loader v-if="isShowLoader" />

    <div v-else-if="isFilmsNotFound" class="list-films__not-found">
        К сожалению, по вашему запросу ничего не найдено...
    </div>

    <div v-else class="list-films">
        <div ref="list" class="list-films__content">
            <router-link
                v-for="film in displayedFilmsCards"
                :key="film.id"
                class="list-films__item"
                :to="{
                    name: 'сardFilm',
                    params: {
                        page: currentPage,
                        id: film.id,
                        sourceFilm: JSON.stringify(film),
                    },
                }"
            >
                <img
                    v-if="film.small_poster"
                    :src="film.small_poster"
                    :alt="film.name_russian"
                    class="list-films__poster"
                />

                <img
                    v-else
                    src="../../assets/images/found-films/no-foto.png"
                    :alt="film.name_russian"
                    class="list-films__poster"
                />

                <span class="list-films__year">{{ film.year }}</span>
            </router-link>
        </div>

        <Pagination
            v-if="films.length"
            :current-page="Number(currentPage)"
            :is-disabled="isShowLoader"
            :number-show-films-cards="displayedFilmsCards.length"
            @change-current-page="changeCurrentPage"
            @scroll-to-top-page="scrollToTopPage"
        />
    </div>
</template>

<script>
import {MAX_NUMBER_CARD_ON_PAGE} from '../../helpers/constants.js';

import Loader from '../ui/Loader.vue';
import Pagination from '../ui/Pagination.vue';

export default {
    name: 'ListFilms',

    components: {
        Loader,
        Pagination,
    },

    props: {
        films: {
            type: Array,
            default: () => [],
        },

        isShowLoader: {
            type: Boolean,
            default: false,
        },

        isFilmsNotFound: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['get-extra-films'],

    data() {
        return {
            currentPage: 1,
        };
    },

    computed: {
        displayedFilmsCards() {
            return this.films.slice(this.minCountCards, this.maxCountCards);
        },

        minCountCards() {
            const startPaginationState =
                (this.currentPage - 1) * MAX_NUMBER_CARD_ON_PAGE;

            return startPaginationState;
        },

        maxCountCards() {
            const endPaginationState =
                this.currentPage * MAX_NUMBER_CARD_ON_PAGE;

            return endPaginationState;
        },

        defineInitialPage() {
            return this.$route.query?.page || 1;
        },
    },

    watch: {
        currentPage() {
            let endFilmList =
                this.currentPage ===
                this.films.length / MAX_NUMBER_CARD_ON_PAGE;

            if (endFilmList) {
                this.$emit('get-extra-films');
            }
        },
    },

    created() {
        this.openPage();
        this.goToFirstPage();
    },

    methods: {
        scrollToTopPage() {
            let el = this.$refs.list;
            let distanceFromElToTopBorder = el.getBoundingClientRect().top;
            let scrollPosition = distanceFromElToTopBorder + window.pageYOffset;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth',
            });
        },

        changeCurrentPage(page) {
            this.currentPage = page;
        },

        openPage() {
            this.currentPage = this.defineInitialPage;
            this.$router.push(`${this.$route.path}?page=${this.currentPage}`);
        },

        goToFirstPage() {
            this.$router.beforeEach((to) => {
                if (to.fullPath === '/films/?page=1') {
                    this.currentPage = 1;
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.list-films {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @include respond-to(sm) {
        position: relative;
        padding: 0 1rem;
    }

    @include respond-to(xs) {
        padding: 0 .5rem;
    }

    &__not-found {
        margin-top: 2rem;
        font-weight: 500;
        font-size: 2.4rem;

        @include respond-to(sm) {
            padding: 0 1rem;
        }
    }

    &__content {
        display: flex;
        width: 81%;
        height: 100%;
        margin: 0 auto;
        flex-wrap: wrap;

        @include respond-to(md) {
            width: 90.5%;
        }

        @include respond-to(sm) {
            width: 100%;
            justify-content: center;
        }
    }

    &__item {
        position: relative;
        height: 25rem;
        flex: 0 0 16%;
        margin-right: 1rem;
        cursor: pointer;

        &:hover {
            top: -2px;
            box-shadow: 0 5px 10px 2px rgb(74 153 153 / 36%);

            &:before {
                content: "";
                position: absolute;
                z-index: 1;
                top: calc(50% - 3.5rem);
                left: calc(50% - 3.5rem);
                width: 7rem;
                height: 7rem;
                border-radius: 50%;
                background-color: $green;
            }

            &:after {
                content: "";
                position: absolute;
                z-index: 1;
                top: calc(50% - 2rem);
                left: calc(50% - .5rem);
                border: 2rem solid transparent;
                border-left: 2rem solid $white;
            }
        }

        &:nth-child(5) {
            margin-right: 0;
        }

        &:nth-child(10) {
            margin-right: 0;
        }

        &:nth-child(n + 6) {
            margin-top: 1rem;
        }

        @include respond-to(sm) {
            width: 100%;
            height: unset;

            &:nth-child(5) {
                margin-right: 1.5rem;
            }

            &:nth-child(even) {
                margin-right: 0;
            }

            &:nth-child(n + 3) {
                margin-top: 1rem;
            }
        }
    }

    &__slider-prev,
    &__slider-next {
        position: absolute;
        top: calc(50% - 1.3rem);
        z-index: 1;
        color: $green;
        font-size: 2.6rem;
    }

    &__slider-next {
        right: -5rem;
    }

    &__slider-prev {
        left: -5rem;
    }

    &__poster {
        max-width: 19rem;
        min-width: 17rem;
        width: 100%;
        height: 25rem;
        background-image: url("../../assets/placeholder.png");
        background-size: contain;

        @include respond-to(sm) {
            min-width: 33rem;
            height: 45rem;
        }

        @include respond-to(xs) {
            min-width: 15rem;
            height: 25rem;
        }

        &._placeholder {
            border: 2px solid $green;
        }
    }

    &__year {
        position: absolute;
        bottom: 7%;
        left: 10%;
        padding: 5px;
        background-color: $green;
        color: $white;
        font-size: 1.6rem;
        font-weight: 700;
    }
}
</style>
