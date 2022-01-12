import { createRouter, createWebHistory } from "vue-router";

import PageMovies from './pages/page-movies/index.vue';
import ListMovies from './components/page-movies/ListMovies.vue';
import CardMovies from './pages/card-movies/CardMovies.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '', 
            name: 'pageMovies',
            component: PageMovies,
        },
        { 
            path: '/film/:id', 
            name: 'cardMovies',
            component: CardMovies, 
        }
    ]
});
