import { ADD_BREWERY_BY_NAME_TO_FAVORITE_LIST } from "../Actions";

const DEFAULT_STATE = {};

const favoriteBreweryReducer = function (state = DEFAULT_STATE, action) {
  
  switch (action.type) {
    case ADD_BREWERY_BY_NAME_TO_FAVORITE_LIST:
      return {
        breweries: action.payload.data
      }
    case "DELETE_BREWERY_BY_NAME_TO_FAVORITE_LIST":
      return {
        
      }
    default:
      return state;
  }
}

export default favoriteBreweryReducer;