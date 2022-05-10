import { api } from './constants';

export async function getMovies() {
    let response =  await fetch(api.urlMoviesApi);

    return await response.json();
}
