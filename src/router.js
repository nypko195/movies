import { createRouter, createWebHistory } from "vue-router";

import ListMovies from './components/movies/ListMovies.vue';
import CardMovie from './components/movies/CardMovie.vue';
import FoundMovies from './components/search-movie/FoundMovies.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '', 
            redirect: { name: 'ListMovies'},
        },

        { 
            path: '/movies/', 
            name: 'pageMovies',
            component: ListMovies,
        },

        { 
            path: '/movies/?page=:page/:id/',
            name: 'сardMovies',
            component: CardMovie,
            props: true,
        },

        {
            path: '/movies/search/',
            name: 'outputMovies',
            component: FoundMovies,
        }
    ]
});
