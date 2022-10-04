<template> 
    <Loader v-if="isShowLoader"/>

    <div v-else class="list-films js-list-films">
        <div ref="list" class="list-films__content">
            <router-link
                class="list-films__item"
                v-for="film in showFilmsCards"
                :key="film.id"
                :to="{ name: 'сardFilm', params: { page: page, id: film.id, film: JSON.stringify(film)} }"
            >
                <img v-if="film.small_poster" class="list-films__poster" :src="film.small_poster"/>
                <span class="list-films__year">{{ film.year }}</span>
            </router-link>
        </div>

        <Pagination 
            :page="page"
            :is-show-btn-prev="isShowBtnPagePrev"
            :is-show-btn-next="isShowBtnPageNext"
            :is-disabled="isShowLoader"
            @prev-page="prevPage"
            @next-page="nextPage"
        />
    </div>
</template>

<script>
// components
import Loader from '../ui/Loader.vue';
import Pagination from '../ui/Pagination.vue';

export default {
    name: 'ListFilms',

    inject: ['mq'],

    emits: ['get-films'],

    components: {
        Loader,
        Pagination,
    },

    props: {
        films: {
            type: Array,
            default: () => ([]),
        },

        isShowLoader: {
            type: Boolean, 
            default: false,
        },
    },

    data() {
        return {
            page: 1,
        };
    },

    created() {
        this.page = this.$route.query?.page || 1;
        this.$router.push(`${this.$route.path}?page=${this.page}`);

        this.$router.beforeEach((to) => {
            if (to.fullPath === '/films/?page=1') {
                this.page = 1;
            }
        });
    },

    computed: {
        isMobile() {
            const isScreenSizeXs = this.mq.current === 'xs';
            const isScreenSizeZero = this.mq.current === 'zero';

            return isScreenSizeXs || isScreenSizeZero;
        },

        isTablet() {
            const isScreenSizeSm = this.mq.current === 'sm';

            return isScreenSizeSm
        },

        showFilmsCards() {
            return this.films.slice(this.minCountCards, this.maxCountCards);
        },

        minCountCards() {
            const MAX_NUMBER_CARD_ON_PAGE = 10;
            const startPaginationState = (this.page - 1) * MAX_NUMBER_CARD_ON_PAGE;

            return startPaginationState;
        },

        maxCountCards() {
            const MAX_NUMBER_CARD_ON_PAGE = 10;
            const endPaginationState = this.page * MAX_NUMBER_CARD_ON_PAGE;

            return endPaginationState;
        },

        isShowBtnPagePrev() {
            return this.page !== 1 || this.showFilmsCards.length < 10 && this.showFilmsCards.length > 1;
        },

        isShowBtnPageNext() {
            return this.showFilmsCards.length >= 10;
        },
    },

    watch: {
        page() {
            let numberDisplayedFilms = 10;
            let endFilmList = this.page === (this.films.length / numberDisplayedFilms);

            if (endFilmList) {
                this.$emit('get-films');
            }
        },
    },

    methods: {
        nextPage() {
            this.page++;
            this.$router.push(`${this.$route.path}?page=${this.page}`);

            if (this.isTablet || this.isMobile) {
                this.scrollToTopPage();
            }
        },

        prevPage() {
            this.page--;
            this.$router.push(`${this.$route.path}?page=${this.page}`);

            if (this.isTablet || this.isMobile) {
                this.scrollToTopPage();
            }
        },

        scrollToTopPage() {
            let el = this.$refs.list;
            let scroll = el.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: scroll,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.list-films {
    display: flex;
    flex-direction: column;

    @include respond-to(sm) {
        position: relative;
        height: 100%;
        padding: 0 1rem;
    }

    @include respond-to(xs) {
        padding: 0 .5rem;
    }

    &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__item {
        position: relative;
        flex: 0 0 16%;
        margin-right: 1.5rem;
        cursor: pointer;

        &:hover {
            top: -2px;
            box-shadow: 0px 5px 10px 2px rgba(74, 153, 153, 0.36);

            &:before {
                content: '';
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
                content: '';
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

    &__slider-prev, &__slider-next {
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
        background-image: url('../../assets/placeholder.png');
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