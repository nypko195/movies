import { urlForGetFilm, urlForGetFilmsByPage, urlForFilmsSearch } from './constants';

export async function getFilms() {
    let response =  await fetch(urlForGetFilm);

    let { data } = await response.json();

    return data;
}

export async function getFilmsByPage(page) {
    let response = await fetch(`${urlForGetFilmsByPage + page}`);

    let { data } = await response.json();

    return data;
}

export async function getFoundFilms(searchNameFilm) {
    let response = await fetch(`${urlForFilmsSearch + searchNameFilm}`);

    let { data } = await response.json()

    return data;
}
