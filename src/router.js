import { createRouter, createWebHistory } from "vue-router";

import CardMovies from './components/pages/list-movies/CardMovies.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/movies/:id', 
            name: 'cardMovies',
            component: CardMovies, 
        }
    ]
});
