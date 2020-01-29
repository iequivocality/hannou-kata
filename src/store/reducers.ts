import { SomeState, ActionTypes, SET_ACTION, DELETE_ACTION } from "./types";

const initialState : SomeState = {
    object : {}
}

export function rootReducer(state : SomeState = initialState, action : ActionTypes) : SomeState {
    switch (action.type) {
        case SET_ACTION:
            return {...state, object : action.payload};
        case DELETE_ACTION:
            return {...state, object : null};
        default:
            return state;
    }
}