import { createRouter, createWebHistory } from 'vue-router';

//page
import ListFilms from './components/films/ListFilms.vue';
import CardFilm from './components/films/CardFilm.vue';

//error
import Error from './pages/error/Error.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            redirect: { name: 'listFilms' },
        },

        {
            path: '/films/',
            name: 'listFilms',
            component: ListFilms,
        },

        {
            path: '/films/?page=:page/:id',
            name: 'сardFilm',
            component: CardFilm,
            props: true,
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: Error,
            props: true,
        },
    ],
});
