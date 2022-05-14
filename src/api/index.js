import { api } from './constants';

export async function getFilms() {
    let response =  await fetch(api.urlFilmsApi);

    let { data } = await response.json();
    console.log(data);
    return data;
}
