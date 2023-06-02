import { FETCH_BREWERY } from "../Actions";

const DEFAULT_STATE = {};

const breweryReducer = function (state = DEFAULT_STATE, action) {
  debugger;
  switch (action.type) {
    case FETCH_BREWERY:
      return {

      }
    default:
      return state;
  }
}

export default breweryReducer;