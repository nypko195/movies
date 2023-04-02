import {urlForGetFilm, urlForGetFilmsByPage, urlSearchFilm} from './constants';

export async function getFilms() {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(urlForGetFilm);

        let {data} = await response.json();

        return data;
    } catch (err) {
        throw err;
    }
}

export async function getFilmsByPage(page) {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(`${urlForGetFilmsByPage + page}`);

        let {data} = await response.json();

        return data;
    } catch (err) {
        throw err;
    }
}

export async function getFilmOfSearch(searchNameFilm) {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await fetch(`${urlSearchFilm}${searchNameFilm}`);

        let {data} = await response.json();

        return data;
    } catch (err) {
        throw err;
    }
}
