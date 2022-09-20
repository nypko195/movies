import { urlForGetFilm, urlForGetFilmsByPage, urlForFilmsSearch } from './constants';

export async function getFilms() {
    try {
        const response =  await fetch(urlForGetFilm);

        let { data } = await response.json();

        return data;
    } catch(err) {
        console.log('[index.js]: Failed to load method getFils', err);
    }    
}

export async function getFilmsByPage(page) {
    try {
        const response = await fetch(`${urlForGetFilmsByPage + page}`);

        let { data } = await response.json();

        return data;
    } catch(err) {
        console.log('[index.js]: Failed to load method getFilmsByPage', err);
    }
}

export async function getFoundFilms(searchNameFilm) {
    try {
        const response = await fetch(`${urlForFilmsSearch + searchNameFilm}`);

        let { data } = await response.json()

        return data;
    } catch(err) {
        console.log('[index.js]: Failed to load method getFoundFilms', err);
    }
}
