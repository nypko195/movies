import { createRouter, createWebHistory } from "vue-router";

import ListMovies from './components/pages/list-movies/ListMovies.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ListMovies },
    ]
});
