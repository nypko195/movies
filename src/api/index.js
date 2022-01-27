import { urlMoviesApi } from './constants';

export async function getMovies() {
    let response =  await fetch(urlMoviesApi);

    return await response.json();
}
