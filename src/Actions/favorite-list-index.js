import axios from 'axios';

export const ADD_BREWERY_BY_NAME_TO_FAVORITE_LIST = 'ADD_BREWERY_BY_NAME_TO_FAVORITE_LIST';

export function addBreweryByNameToFavoriteList(query) {
  const breweryURL = 'https://api.openbrewerydb.org/v1/breweries?by_name=';
  const request = axios.get (`${breweryURL}${query.name}`)

  return {
    type: ADD_BREWERY_BY_NAME_TO_FAVORITE_LIST,
    payload: request
  }
};