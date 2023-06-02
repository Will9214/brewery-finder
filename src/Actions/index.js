import axios from 'axios';

export const FETCH_BREWERY_BY_NAME = 'FETCH_BREWERY_BY_NAME';
export const FETCH_BREWERY_BY_CITY = 'FETCH_BREWERY_BY_CITY';


export function fetchBreweryByName(query) {
  const breweryURL = 'https://api.openbrewerydb.org/v1/breweries?by_name=';
  const request = axios.get (`${breweryURL}${query.name}`)

  return {
    type: FETCH_BREWERY_BY_NAME,
    payload: request
  }
};

export function fetchBreweryByCity(query) {
  const breweryURL = 'https://api.openbrewerydb.org/v1/breweries?by_city='
  const request = axios.get(`${breweryURL}${query.city}`)
  
  return {
    type:FETCH_BREWERY_BY_CITY,
    payload: request
  }
}