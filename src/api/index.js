import {
    urlForGetFilm,
    urlForGetFilmsByPage,
    urlSearchFilm,
} from './constants';

export async function getFilms() {
    try {
        const response = await fetch(urlForGetFilm);

        let { data } = await response.json();

        return data;
    } catch (err) {
        throw err;
    }
}

export async function getFilmsByPage(page) {
    try {
        const response = await fetch(`${urlForGetFilmsByPage + page}`);

        let { data } = await response.json();

        return data;
    } catch (err) {
        throw err;
    }
}

export async function getFilmOfSearch(searchNameFilm) {
    try {
        const response = await fetch(`${urlSearchFilm}${searchNameFilm}`);

        let { data } = await response.json();

        return data;
    } catch (err) {
        throw err;
    }
}
