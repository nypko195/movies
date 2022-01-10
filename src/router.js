import { createRouter, createWebHistory } from "vue-router";

import ListMovies from './components/pages/list-movies/ListMovies.vue';
import CardMovies from './components/pages/list-movies/CardMovies.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ListMovies },
        { path: '/movies/', component: CardMovies }
    ]
});
