import url from './urlApi';

export default async function() {
    let response =  await fetch(url);

    let data =  await response.json(); 
    let moviesList =  await data.data;

    return moviesList; 
}
