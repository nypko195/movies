<template>
    <div class="page-films">
        <router-view
            v-slot="{ Component }"
            :is-show-loader="isShowLoader"
            :films="films"
            :search-name-film="filmNameFromSearch"
            :is-films-not-found="isFilmsNotFound"
            @get-extra-films="getExtraFilms"
        >
            <transition name="fade" mode="out-in">
                <div :key="$route.name" class="page-films__wrapper">
                    <component :is="Component" />
                </div>
            </transition>
        </router-view>
    </div>
</template>

<script>
import { getFilms, getFilmsByPage, getFilmOfSearch } from '../../api/index.js';
import { MAX_NUMBER_CARD_ON_PAGE } from '../../helpers/constants.js';

export default {
    name: 'PageFilms',

    props: {
        filmNameFromSearch: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            films: [],
            requestPageNumber: 2,
            isShowLoader: false,
            isFilmsNotFound: false,
        };
    },

    computed: {
        hasParamsUrl() {
            return Boolean(this.$route.params?.page && this.$route.params?.id);
        },
    },

    watch: {
        async filmNameFromSearch() {
            if (!this.filmNameFromSearch) return;

            try {
                await this.getFilmOfSearch();
            } catch (err) {
                console.log('[PageFilms.vue]: Failed to load method getFilmOfSearch', err)

                this.$router.push({name: 'error', params: {err}});
            }
        },
    },

    async mounted() {
        await this.getFilms();
        this.getParamsUrl();
    },

    methods: {
        async getFilms(isNeedFilms) {
            this.isShowLoader = true;

            if (isNeedFilms) {
                let newFilms;

                try {
                    newFilms = await getFilmsByPage(this.requestPageNumber); 
                } catch (err) {
                    console.log('[PageFilms.vue]: Failed to load method getFils', err)

                    this.$router.push({name: 'error', params: {err}});
                }

                this.films = [...this.films, ...newFilms];
                this.requestPageNumber++;

                this.isShowLoader = false;
                return;
            }

            try {
                this.films = await getFilms();
            } catch (err) {
                console.log('[PageFilms.vue]: Failed to load method getFils', err)

                this.$router.push({name: 'error', params: {err}});
            }

            this.isFilmsNotFound = false;
            this.isShowLoader = false;
        },

        async getExtraFilms() {
            await this.getFilms(true);
        },

        async getFilmOfSearch() {
            if (!this.filmNameFromSearch) return;
            this.isShowLoader = true;

            if (this.isFilmsNotFound) {
                this.isFilmsNotFound = false;
            }

            try {
                this.films = await getFilmOfSearch(
                    this.normalizeNameFilm(this.filmNameFromSearch)
                );
            } catch (err) {
                console.log('[PageFilms.vue]: Failed to load method getFilmOfSearch', err)

                this.$router.push({name: 'error', params: {err}});
            }

            if (!this.films.length) {
                this.isFilmsNotFound = true;
            }

            this.isShowLoader = false;
        },

        getParamsUrl() {
            if (!this.films.length && !this.hasParamsUrl) return;

            let urlParams = this.$route.query.page.split('/');

            if (!urlParams.length) return;

            this.opensOneOfThePages(this.setParamsUrl(urlParams));
        },

        setParamsUrl(urlParams) {
            return {
                page: urlParams[0],
                id: urlParams[1],
            };
        },

        findNeededFilm(id) {
            return this.films.filter((film) => {
                return film.id === Number(id);
            });
        },

        getFilmById(id) {
            return this.findNeededFilm(id)[0];
        },

        opensOneOfThePages(urlParams) {
            let film;

            if (Object.keys(urlParams).length === 2 && urlParams?.id) {
                film = this.getFilmById(urlParams.id);
            }

            if (film?.id) {
                this.openCardFilm(film, urlParams)
                return;
            }

            if ((this.films.length / MAX_NUMBER_CARD_ON_PAGE) >= Number(urlParams.page)) {
                this.$router.push({ name: 'listFilms' });
                return;
            }

            this.openErrorPage();
        },


        openErrorPage() {
            this.$router.push({ name: 'error' });
        },

        openCardFilm(film, urlParams) {
            this.$router.push({
                name: 'сardFilm',
                params: {
                    page: urlParams.page,
                    id: film.id,
                    sourceFilm: JSON.stringify(film),
                },
            });
        },

        normalizeNameFilm(name) {
            return name.toLowerCase().trim();
        },
    },
};
</script>

<style lang="scss">
.page-films {
    display: flex;
    position: relative;
    max-width: 110rem;
    min-height: 61rem;
    height: 100%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 20px;
    background-color: $bg-block;
    border-radius: 5px;

    @include respond-to(lg) {
        max-width: 100%;
        margin: 10px 10rem;
        height: auto;
    }

    @include respond-to(md) {
        margin: 10px 2rem;
        min-height: calc(100vh - 15rem);
    }

    &__wrapper {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
}
</style>
