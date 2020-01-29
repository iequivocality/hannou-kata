export interface SomeState {
    object : any
}

export const SET_ACTION = "SET_ACTION";

export const DELETE_ACTION = "DELETE_ACTION";

interface SetAction {
    type: typeof SET_ACTION,
    payload: any
}

interface DeleteAction {
    type: typeof DELETE_ACTION,
    payload : any
}

export type ActionTypes = SetAction | DeleteAction;