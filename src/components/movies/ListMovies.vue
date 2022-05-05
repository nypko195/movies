<template> 
    <Loader v-if="isShowLoader"/>

        <div
            v-if="!isShowLoader"
            class="list-movies"
        >
            <router-link
                class="list-movies__item"
                v-for="movie in showPageMovies"
                :key="movie.id"
                :to="{name: 'сardMovies', params: {id: movie.id}}"
                @click="openMoviePage(movie.id)"
            >
                <img class="list-movies__poster" :src="movie.small_poster"/>
                <span class="list-movies__year">{{ movie.year }}</span>
            </router-link>

            <div v-if="isMobile && isTablet || sliderIndex !== 0" class="list-movies__slider-prev"  @click="prevSlide">&#10094;</div>
            <div v-if="isMobile && isTablet || maxCountSlides !== sliderIndex" class="list-movies__slider-next" @click="nextSlide">&#10095;</div>
        </div>

        <div class="list-movies__paginations">
            <button
                class="list-movies__paginations-prev button"
                :class="{'_disabled': isShowLoader}"
                @click="prevPage"
                v-show="isShowBtnPagePrev"
            >
                prev
            </button>
            <span class="list-movies__paginations-page">{{ page }}</span>
            <button
                class="list-movies__paginations-next button"
                :class="{'_disabled': isShowLoader}"
                @click="nextPage"
                v-show="isShowBtnPageNext"
            >
                next
            </button>
        </div>

    <!-- <CardMovies
        v-if="!isShowLoader && isOpenMoviePage"
        :movie="cardMovie"
        @close="close()"
    >                
    </CardMovies> -->
</template>

<script>
    //components
    import Loader from '../ui/Loader.vue';
    // import CardMovies from './CardMovies.vue';

    //function
    // import { getMovies }  from '../../api/index.js';

    export default {
        name: 'ListMovies',

        inject: ['mq'],

        components: {
            Loader,
            // CardMovies,
        },

        props: {
            movies: {
                type: Array,
                default: () => [],
            }
        },

        data() {
            return {
                // movies: [],
                page: 1,
                isShowLoader: false,
                cardMovie: {},
                sliderIndex: 0,
                maxCountSlides: 0,
                requestedPageNumber: 2,
                // isOpenMoviePage: false,
                numberRequests: 0,
            }
        },

        async created() {
            this.page = this.$route.query?.page || 1;
            
            // if (this.page < 5) {
            //     await this.getMovies();
            // } else {
            //     await this.getMovies();
            //     await this.addNewMovies();               
            // }

            // if (this.$route.query?.movie) {
            //     this.openMoviePage(Number(this.$route.query.movie));
            // }

            // if (!this.isShowLoader) {
            //     this.showSlides(this.sliderIndex);  
            // }
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

            showPageMovies() {      
                if (!this.isMobile && !this.isTablet) {               
                    return this.movies.slice(this.minCountCards, this.maxCountCards);
                }

                return this.movies;    
            },

            minCountCards() {
                const maxNumberCardOnPage = 10;
                const startPaginationState = (this.page - 1) * maxNumberCardOnPage;

                return startPaginationState;
            },

            maxCountCards() {
                const maxNumberCardOnPage = 10;
                const endPaginationState = this.page * maxNumberCardOnPage;

                return endPaginationState;
            },

            isShowBtnPagePrev() {
                return this.page !== 1 || this.showPageMovies.length < 10 && this.showPageMovies.length > 1;
            },

            isShowBtnPageNext() {
                //подумать над решением если не знать количество страниц
                //проверка гит
                // return this.page !== 5 && this.showPageMovies.length >= 10;
                return this.showPageMovies.length >= 10;
            },
        },

        watch: {
            page() {
                this.$emit('page', this.page);
            }
        },

        methods: {
            // async addNewMovies() {
            //     let count = Math.floor(this.page / 5);

            //     this.isShowLoader = true;
            //     if (count !== this.numberRequests) {                    
            //         await this.getNewMovies();
            //         this.addNewMovies();                    

            //         this.numberRequests++;
            //     } else {
            //         return;
            //     }
            //     this.isShowLoader = false;
            // },

            // async getMovies() {
            //     this.isShowLoader = true;
            //     // let movies = await getMovies();
            //     // this.movies = movies.data;

            //     getMovies().then(data => this.movies = data);
            //     this.isShowLoader = false;
            // },

            // async getNewMovies() {                
            //     // let resp = await fetch(`https://kinobd.ru/api/films?page=${this.requestedPageNumber}`);
            //     let resp = Promise.resolve({
            //         name_russian: 'Шрэк',
            //         year: 2019,
            //         country_ru: 'Russian',
            //         description: 'Интересный мультик про зеленных обезьянок.'
            //     }).then(data => this.movies = data);
            //     // let newMovies = await resp.json();             

            //     // this.movies = [...this.movies, ...newMovies.data]; 

            //     this.requestedPageNumber++;                
            // },

            openMoviePage(id) {
                this.$emit('is-card', true);
                let cardMovie = this.movies.filter(item => item.id === id);
                this.$emit('cardMovie', cardMovie[0]);
                console.log(cardMovie[0]);

                // this.$router.push(`${this.$route.path}?page=${this.page}&movie=${id}`);
            },

            close() {
                // this.isOpenMoviePage = false;
                this.requestedPageNumber = 2;
                this.numberRequests = 0;
                this.$router.push(`${this.$route.path}?page=${this.page}`);
            },

            nextPage() {
                this.page++;
                this.numberRequests = 0;
                this.$router.push(`${this.$route.path}?page=${this.page}`);
            },

            prevPage() {
                this.page--;
                this.numberRequests = 0;
                this.$router.push(`${this.$route.path}?page=${this.page}`);
            },

            nextSlide() {
                this.sliderIndex++;
                this.showSlides();
            },

            prevSlide() {
                this.sliderIndex--;
                this.showSlides();
            },

            showSlides() {   
                if (!this.isTablet && !this.isMobile) return;

                let slides = document.getElementsByClassName('list-movies__item');

                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = 'none';
                }

                if (this.isTablet) {
                    slides[this.sliderIndex].style.display = 'block';
                    slides[this.sliderIndex + 1].style.display = 'block';
                    slides[this.sliderIndex + 2].style.display = 'block';

                    this.maxCountSlides = slides.length - 3;

                    return;
                } else {
                    slides[this.sliderIndex].style.display = 'block';

                    this.maxCountSlides = slides.length;
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
            max-width: 90%;
            position: relative;
        }

        &__item {
            position: relative;
            flex: 0 0 16%;
            margin-right: 1.5rem;
            margin-bottom: 1rem;
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

            @include respond-to(sm) {
                width: 100%;
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

                &._disabled {
                    pointer-events: none;
                    opacity: .4;
                }
            }

            &-next {
                left: 55%;

                @include respond-to(xs) {
                    left: 62%;
                }

                &._disabled {
                    pointer-events: none;
                    opacity: .4;
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