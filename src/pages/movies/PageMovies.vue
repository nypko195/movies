<template>
    <div class="page-movies">
        <ListMovies
            v-if="!isShowCardMovie" 
            :movies="movies"
            @page="page = $event"
            @is-card="isShowCardMovie = $event"
            @card-movie="cardMovie = $event"
        />

        <CardMovies            
            :movie="movies"
        />
    </div>
</template>

<script>
    //components
    import ListMovies from '../../components/movies/ListMovies.vue';
    import CardMovies from '../../components/movies/CardMovies.vue';

    //function
    import { getMovies }  from '../../api/index.js';

    export default {
        name: 'PageMovies',

        components: {
            ListMovies,
            CardMovies,
        },

        props: {
            nameMovie: {
                type: String,
            }
        },

        data() {
            return {
                movies: [],
                page: 1,
                isShowCardMovie: false,
                cardMovie: {},
            }
        },

        async created() {            
            if (this.page < 5) {
                await this.getMovies();
            } else {
                await this.getMovies();
                await this.addNewMovies();               
            }

            if (this.$route.query?.movie) {
                this.openMoviePage(Number(this.$route.query.movie));
            }

            // if (!this.isShowLoader) {
            //     this.showSlides(this.sliderIndex);  
            // }
        },

        watch: {
            async page() {
                let numberDisplayedMovies = 10;
                let endMovieList = this.page === (this.movies.length / numberDisplayedMovies);

                if (endMovieList) {
                    // this.isShowLoader = true;
                    await this.getNewMovies();
                    // this.isShowLoader = false;
                }
            }
        },

        methods: {
            async addNewMovies() {
                let count = Math.floor(this.page / 5);

                this.isShowLoader = true;
                if (count !== this.numberRequests) {                    
                    await this.getNewMovies();
                    this.addNewMovies();                    

                    this.numberRequests++;
                } else {
                    return;
                }
                this.isShowLoader = false;
            },

            async getMovies() {
                this.isShowLoader = true;
                // let movies = await getMovies();
                // this.movies = movies.data;

                getMovies().then(data => this.movies = data);
                this.isShowLoader = false;
            },

            async getNewMovies() {                
                // let resp = await fetch(`https://kinobd.ru/api/films?page=${this.requestedPageNumber}`);
                let resp = Promise.resolve({
                    name_russian: 'Шрэк',
                    year: 2019,
                    country_ru: 'Russian',
                    description: 'Интересный мультик про зеленных обезьянок.'
                }).then(data => this.movies = data);
                // let newMovies = await resp.json();             

                // this.movies = [...this.movies, ...newMovies.data]; 

                this.requestedPageNumber++;                
            },

            openMoviePage(id) {
                this.isOpenMoviePage = true;
                this.cardMovie = this.movies.filter(item => item.id === id);
                this.$router.push(`${this.$route.path}?page=${this.page}&movie=${id}`);
            },
        }
    }
</script>

<style lang="scss">
    .page-movies{
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        max-width: 110rem;
        min-height: 61rem;
        height: auto;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-top: 20px;
        background-color: $bg-block;
        border-radius: 5px;   

        @include respond-to(lg) {
            max-width: 100%;
            margin: 10px 10rem;
        }

        @include respond-to(md) {
            margin: 10px 2rem;
            min-height: 35rem;
        }

        @include respond-to(sm) {
            min-height: 30rem;
        }
    }
</style>