import { urlForGetFilm, urlForGetFilmsByPage, urlForFilmsSearch } from './constants';

export async function getFilms() {
    const response =  await fetch(urlForGetFilm);

    let { data } = await response.json();

    return data;
}

export async function getFilmsByPage(page) {
    const response = await fetch(`${urlForGetFilmsByPage + page}`);

    let { data } = await response.json();

    return data;
}

export async function getFoundFilms(searchNameFilm) {
    const response = await fetch(`${urlForFilmsSearch + searchNameFilm}`);

    let { data } = await response.json()

    return data;
}
