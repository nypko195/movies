import { createRouter, createWebHistory } from "vue-router";

import PageMovies from './pages/movies/PageMovies.vue';
import CardMovies from './components/movies/CardMovies.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '', 
            redirect: { name: 'pageMovies'},
        },
        { 
            path: '/movies/', 
            name: 'pageMovies',
            component: PageMovies,
        },
        // { 
        //     path: '/movies/:id', 
        //     name: 'сardMovies',
        //     component: CardMovies,
        //     props: true
        // }
    ]
});
