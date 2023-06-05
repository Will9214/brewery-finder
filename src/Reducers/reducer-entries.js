import { FETCH_BREWERY_BY_CITY, FETCH_BREWERY_BY_NAME, ADD_TO_FAVORITES_LIST } from "../Actions";
import _ from "lodash";

const DEFAULT_STATE = {
  breweries: [],
  favorites: [],
  favoritesOrder: []
};

const breweryReducer = function (state = DEFAULT_STATE, action) {
  debugger;
  switch (action.type) {
    case FETCH_BREWERY_BY_NAME:
      return {
        breweries: action.payload.data
      }
    case FETCH_BREWERY_BY_CITY:
      return {
        breweries: action.payload.data
      }
    case ADD_TO_FAVORITES_LIST:
      return {
        ...state,
        favorites: {...state.favorites, 
            [action.payload.id]: {
              info: action.payload,
              isFavorite: true
            }
          },
        favoritesOrder: [...state.favoritesOrder].concat([action.payload.id])
      }
    default:
      return state;
  }
}

export default breweryReducer;