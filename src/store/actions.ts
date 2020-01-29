import { ActionTypes, SET_ACTION, DELETE_ACTION } from "./types";

export function setActionCreator(obj : any) : ActionTypes {
    return {
        type: SET_ACTION,
        payload: obj
    };
}

export function deleteActionCreator(obj : any) : ActionTypes {
    return {
        type: DELETE_ACTION,
        payload: obj
    };
}