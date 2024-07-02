import {combineReducers, legacy_createStore as createStore } from 'redux'; 
import { searchReducer } from './reducers/searchReducer';
 
const rootReducer = combineReducers({ 
    search: searchReducer, 
}) 
   
export const store = createStore(rootReducer) 
 
export type RootState = ReturnType<typeof rootReducer>
