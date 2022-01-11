<template>    
    <div 
        v-if="!getNameMovie"
        class="list-movies"
    >
        <div 
            class="list-movies__item"
            v-for="movie in activeMovies"
            :key="movie.id"
        >            
            <router-link  
                :to="{ name: 'cardMovies', params: { id: movie.id } }"
                class="list-movies__link"
                @click="openCardMovie(movie.id)"
            >
                <img class="list-movies__poster" :src="movie.small_poster"/>
            </router-link>
            <span class="list-movies__year">{{ movie.year }}</span>
        </div>
    </div>

    <div 
        v-if="!getNameMovie"
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

    <OutputMovies 
        v-if="getNameMovie"
        :active-movies="activeMovies"
    />
</template>

<script>
import OutputMovies from './OutputMovies.vue'

export default {
    name: 'ListMovies',

    inject: ['mq'],

    components: {
        OutputMovies,
    },

    props: {
        movies: {
            type: Array,
        }
    },

    data() {
        return {
            page: 1,
            movieId: '',
        }
    },

    created() {
        this.pushToUrl();
        this.goToDesiredPage();
    },

    computed: {
        isMobile() {
            const isScreenSizeSm = this.mq.current === 'sm';
            const isScreenSizeXs = this.mq.current === 'xs';
            const isScreenSizeZero = this.mq.current === 'zero';

            return isScreenSizeSm || isScreenSizeXs || isScreenSizeZero;
        },

        activeMovies() {
            if (this.getNameMovie) {
                return this.movies.filter(item => {                
                    return item.name_russian.toLowerCase() === this.getNameMovie;
                });
            }

            if (!this.getNameMovie) {
                return this.movies.slice(this.numberCardMin, this.numberCardMax);
            }
            
        },   

        numberCardMin() {
            if(this.isMobile) {
                const maxNumberCardOnPage = 4;
                const startPaginationState = (this.page - 1) * maxNumberCardOnPage;      

                return startPaginationState;
            }

            if(!this.isMobile) {
                const maxNumberCardOnPage = 10;
                const startPaginationState = (this.page - 1) * maxNumberCardOnPage;      

                return startPaginationState;
            }
        },

        numberCardMax() {
            if(this.isMobile) {
                const maxNumberCardOnPage = 4;
                const endPaginationState = this.page * maxNumberCardOnPage;
                return endPaginationState;
            }

            if(!this.isMobile) {
                const maxNumberCardOnPage = 10;
                const endPaginationState = this.page * maxNumberCardOnPage;
                return endPaginationState;
            }
        },

        isShowBtnPagePrev: function() {
            return this.page === 1 || this.activeMovies.length < 10;
        },

        isShowBtnPageNext: function() {
            //подумать над решением если не знать количество страниц
            return this.page !== 5 && this.activeMovies.length >= 10;
        },

        getNameMovie() {
            return this.$store.getters.nameMovies.toLowerCase();
        }, 
    },
    
    methods: {
        pushToUrl() {
            this.$router.push(`${this.$route.path}?page=${this.page}`);
        },

        nextPage() {
            this.page++;
            this.pushToUrl();
        },

        prevPage() {
            this.page--;
            this.pushToUrl();
        },

        goToDesiredPage() {
            if (this.$route.query.page) {
                this.page = this.$route.query.page;
            }    
        },

        openCardMovie(id) {
            this.movieId = id;

            let cardMovie = this.activeMovies.filter(item => {
                return item.id === id;
            });

            this.$store.commit('updateCardMovies', {
                movie: cardMovie
            });
        },   
    }
}
</script>

<style lang="scss" scoped>
    .list-movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &__item {
            position: relative;
            flex: 0 0 16%;
            margin-right: 1.5rem;
            margin-bottom: 1rem;

            &:hover {
                box-shadow: 0px 5px 10px 2px rgba(74, 153, 153, 0.36);
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
    } 
</style>