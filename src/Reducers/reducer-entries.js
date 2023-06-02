import { FETCH_BREWERY_BY_CITY, FETCH_BREWERY_BY_NAME } from "../Actions";

const DEFAULT_STATE = {};

const breweryReducer = function (state = DEFAULT_STATE, action) {
  
  switch (action.type) {
    case FETCH_BREWERY_BY_NAME:
      return {
        breweries: action.payload.data
      }
    case FETCH_BREWERY_BY_CITY:
      return {
        breweries: action.payload.data
      }
    default:
      return state;
  }
}

export default breweryReducer;