import { FETCH_BREWERY } from "../Actions";

const DEFAULT_STATE = {};

const breweryReducer = function (state = DEFAULT_STATE, action) {
  
  switch (action.type) {
    case FETCH_BREWERY:
      return {
        breweries: action.payload.data
      }
    default:
      return state;
  }
}

export default breweryReducer;