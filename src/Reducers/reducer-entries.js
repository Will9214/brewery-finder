import { FETCH_BREWERY_BY_CITY, FETCH_BREWERY_BY_NAME, ADD_TO_FAVORITES_LIST } from "../Actions";

const DEFAULT_STATE = {
  breweries: [],
  favorites: [],
};

const breweryReducer = function (state = DEFAULT_STATE, action) {
  
  switch (action.type) {
    case FETCH_BREWERY_BY_NAME:
      return {
        breweries: action.payload.data,
        favorites: {...state.favorites}
      }
    case FETCH_BREWERY_BY_CITY:
      return {
        breweries: action.payload.data,
        favorites: {...state.favorites}
      }
    case ADD_TO_FAVORITES_LIST:
      return {
        ...state,
        favorites: {...state.favorites, 
            [action.payload.id]: {
              info: action.payload,
              isFavorite: true
            }
          }
      }
    default:
      return state;
  }
}

export default breweryReducer;