import { urlMoviesApi } from './constants';

async function requestMovies() {
    let response =  await fetch(urlMoviesApi);

    return await response.json(); 
}

export { requestMovies }
