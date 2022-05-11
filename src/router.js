import { createRouter, createWebHistory } from "vue-router";

//page
import ListFilms from './components/films/ListFilms.vue';
import CardFilm from './components/films/CardFilm.vue';
import FoundFilms from './components/search-films/FoundFilms.vue';

//error
import NotFound from './pages/error/NotFound.vue';


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '', 
            redirect: { name: 'listFilms'},
        },

        { 
            path: '/films/', 
            name: 'listFilms',
            component: ListFilms,
        },

        { 
            path: '/films/?page=:page/:id/',
            name: 'сardFilm',
            component: CardFilm,
            props: true,
        },

        {
            path: '/films/search/',
            name: 'outputFilms',
            component: FoundFilms,
        },

        {
            path: '/:pathMatch(.*)*', 
            component: NotFound,
        }
    ]
});
