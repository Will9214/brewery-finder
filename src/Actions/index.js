import axios from 'axios';

export const FETCH_BREWERY = 'FETCH_BREWERY';
const breweryURL = 'https://api.openbrewerydb.org/v1/breweries?by_name=';

export function fetchBrewery(query) {
  const request = axios.get (`${breweryURL}${query.name}`)

  return {
    type: FETCH_BREWERY,
    payload: request
  }
}