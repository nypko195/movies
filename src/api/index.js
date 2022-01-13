import { urlMoviesApi } from './constants';

export async function requestMovies() {
    let response =  await fetch(urlMoviesApi);

    return await response.json();
}
