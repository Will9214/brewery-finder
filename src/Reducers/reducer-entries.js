import { FETCH_BREWERY_BY_CITY, FETCH_BREWERY_BY_NAME, ADD_TO_FAVORITES_LIST, REMOVE_FROM_FAVORITE_LIST } from "../Actions";

const DEFAULT_STATE = {
  breweries: [],
  favorites: [],
};

const breweryReducer = function (state = DEFAULT_STATE, action) {

  switch (action.type) {
    case FETCH_BREWERY_BY_NAME:
      return {
        ...state,
        breweries: action.payload.data,
      }
    case FETCH_BREWERY_BY_CITY:
      return {
        ...state,
        breweries: action.payload.data,
      }
    case ADD_TO_FAVORITES_LIST:
      return {
        ...state,
        favorites: [
          ...state.favorites, 
          action.payload
        ]
      }
      
    case REMOVE_FROM_FAVORITE_LIST:
      return {
        ...state,
        favorites: state.favorites.filter(obj => obj.id !== action.payload)
      }
    default:
      return state;
  }
}

export default breweryReducer;