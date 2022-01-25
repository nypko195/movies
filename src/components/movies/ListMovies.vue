<template> 
    <Loader v-if="isShowLoader"/>

    <div 
        v-if="!isShowLoader && !getNameMovieFromSearch"
        class="list-movies"
    >
        <div 
            class="list-movies__item"
            v-for="movie in sortToDisplayMovies"
            :key="movie.id"
        >            
            <router-link  
                :to="{ name: 'сardMovies', params: { id: movie.id, movie: JSON.stringify(movie) } }"
                class="list-movies__link"
            >
                <img class="list-movies__poster" :src="movie.small_poster"/>
            </router-link>
            <span class="list-movies__year">{{ movie.year }}</span>
        </div>
    </div>

    <div 
        v-if="!getNameMovieFromSearch"
        class="list-movies__paginations"
    >
        <button 
            class="list-movies__paginations-prev button"
            @click="prevPage" 
            v-show="!isShowBtnPagePrev"
        >
            prev
        </button>
        <span class="list-movies__paginations-page">{{ page }}</span>
        <button 
            class="list-movies__paginations-next button"  
            @click="nextPage"
            v-show="isShowBtnPageNext"
        >
            next
        </button>
    </div>

    <!-- <OutputMovies 
        v-if="getNameMovieFromSearch"
        :found-movie="sortToDisplayMovies"
    /> -->
</template>

<script>
    //components
    import Loader from '../ui/Loader.vue';
    import OutputMovies from './OutputMovies.vue'

    //function
    import { requestMovies }  from '../../api/index.js';

    export default {
        name: 'ListMovies',

        inject: ['mq'],

        components: {
            Loader,
            OutputMovies,
        },

        data() {
            return {
                movies: [],
                page: 1,
                isShowLoader: false,
                cardMovie: {},
            }
        },

        async created() {
            await this.getMovies();

            this.goToDesiredPage();
        },

        computed: {
            isMobile() {
                const isScreenSizeXs = this.mq.current === 'xs';
                const isScreenSizeZero = this.mq.current === 'zero';

                return isScreenSizeXs || isScreenSizeZero;
            },

            // isTablet() {
            //     const isScreenSizeSm = this.mq.current === 'sm';

            //     return isScreenSizeSm
            // },

            sortToDisplayMovies() {
                if (this.getNameMovieFromSearch && !this.isMobile) {
                    return this.movies.filter(item => {
                        return item.name_russian.toLowerCase() === this.getNameMovieFromSearch;
                    });
                }

                if (!this.getNameMovieFromSearch && !this.isMobile) {               
                    return this.movies.slice(this.numberCardMin, this.numberCardMax);
                }

                return this.movies;    
            },

            numberCardMin() {
                const maxNumberCardOnPage = 10;
                const startPaginationState = (this.page - 1) * maxNumberCardOnPage;

                return startPaginationState;
            },

            numberCardMax() {
                const maxNumberCardOnPage = 10;
                const endPaginationState = this.page * maxNumberCardOnPage;

                return endPaginationState;
            },

            isShowBtnPagePrev: function() {
                return this.page === 1 || this.sortToDisplayMovies.length < 10;
            },

            isShowBtnPageNext: function() {
                //подумать над решением если не знать количество страниц
                return this.page !== 5 && this.sortToDisplayMovies.length >= 10;
            },

            getNameMovieFromSearch() {
                return this.$store.getters.nameMovies.toLowerCase();
            },

            pushToUrlNumberPageMovies() {
                this.$router.push(`${this.$route.path}?page=${this.page}`);
            },
        },

        methods: {
            async getMovies() {
                this.isShowLoader = true;
                let movies = await requestMovies();
                this.movies = movies.data;
                this.isShowLoader = false;
            },

            nextPage() {
                this.page++;
                this.$router.push(`${this.$route.path}?page=${this.page}`);
            },

            prevPage() {
                this.page--;
                this.$router.push(`${this.$route.path}?page=${this.page}`);
            },

            goToDesiredPage() {
                if (this.$route.query.page) {
                    this.page = this.$route.query.page;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .list-movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @include respond-to(sm) {
            flex-wrap: nowrap;
        }

        &__item {
            position: relative;
            flex: 0 0 16%;
            margin-right: 1.5rem;
            margin-bottom: 1rem;

            &:hover {
                top: -2px;
                box-shadow: 0px 5px 10px 2px rgba(74, 153, 153, 0.36);
            }

            @include respond-to(sm) {
                flex: unset;
                width: 15%;
            }
        }

        &__link {
            cursor: pointer;

            &:hover {
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
        }

        &__poster {
            width: 17rem;
            height: 25rem;
        }

        &__year {
            position: absolute;
            bottom: 7%;
            left: 10%;
            padding: 5px;
            background-color: $green;    
            color: $white;
            font-size: 1.6rem;
        }

        &__paginations {
            position: relative;
            width: 100%;
            margin-top: auto;
            margin-bottom:5rem;

            @include respond-to(sm) {
                display: none;
            }
            
            &-prev {
                left: 36%;

                @include respond-to(md) {
                    left: 35%;
                }

                @include respond-to(sm) {
                    left: 31%;
                }

                @include respond-to(xs) {
                    left: 14%;
                }
            }

            &-next {
                left: 55%;

                @include respond-to(xs) {
                    left: 62%;
                }
            }

            &-page {
                position: absolute;
                left: 50%;
                font-size: 1.6rem;
                font-weight: 700;
                cursor: default;
            }     
        }
    }
    .button {
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
</style>