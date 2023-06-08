import axios from "axios";

export const ADD_ITEM_TO_FAVORITE = 'ADD_ITEM_TO_FAVORITE';

export function addItemtoFavorite(query) {
  const breweryURL = 'https://api.openbrewerydb.org/v1/breweries?by_city='
  const request = axios.get(`${breweryURL}${query.city}`)

  return {
    type: ADD_ITEM_TO_FAVORITE,
    payload: request
  }
};