import { ADD_ITEM_TO_FAVORITE } from "../Actions";

const DEFAULT_FAVORITE_STATE = {};

const favoriteBreweryReducer = function (state = DEFAULT_FAVORITE_STATE, action) {
  
  switch (action.type) {
    case ADD_ITEM_TO_FAVORITE: 
      return {
        breweries: action.payload.data
      }
    case "DELETE_ITEM_FROM_FAVORITE":
      return {
        
      }
    default:
      return state;
  }
}

export default favoriteBreweryReducer;