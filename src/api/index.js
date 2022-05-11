import { api } from './constants';

export async function getFilms() {
    let response =  await fetch(api.urlFilmsApi);

    return await response.json();
}
