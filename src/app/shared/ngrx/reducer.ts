import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, ActionTypes, LoadDataBegin, initial } from './actions';
 
export const initialState = {};
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state ),
  on(decrement, (state) => state ),
  on(reset, (state) => state),
  on(initial, (user) => user)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}



export const reducer = (initialState, action: LoadDataBegin)=>{
  if(action.payload != undefined){
    
    switch(action.type){
      case ActionTypes.LoadDataBegin:
        return action.payload;
       default: return action.payload; 

    }
  }
  
}