import {FETCH_STUFF, FETCH_STUFF_ERROR } from "../actions/action.types";

const  INITIAL_STATE ={
    users :[]
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_STUFF:
        return { ...state, users: action.payload };
      case FETCH_STUFF_ERROR:
        return { ...INITIAL_STATE, users: [] };
      default:
        return state;
    }
  }