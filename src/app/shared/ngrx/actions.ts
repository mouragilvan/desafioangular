import { createAction, Action } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const initial = createAction('[Counter Component] Initial');

export enum ActionTypes {
    LoadDataBegin = "[Data] Load data begin",
    LoadDataSuccess = "[Data] Load data success",
    LoadDataFailure = "[Data] Load data failure"
}

export class LoadDataBegin implements Action {
    readonly type = ActionTypes.LoadDataBegin;
    payload: any;
    constructor(payload: any){
        this.payload = payload;       
    }
}

export class LoadDataSuccess implements Action {
    readonly type = ActionTypes.LoadDataSuccess;

    constructor(public payload: { data: any }) { }
}

export class LoadDataFailure implements Action {
    readonly type = ActionTypes.LoadDataFailure;

    constructor(public payload: { error: any }) { }
}

export type ActionsUnion = LoadDataBegin | LoadDataSuccess | LoadDataFailure;