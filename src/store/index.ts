import {combineReducers, legacy_createStore as createStore } from 'redux'; 
import { searchReducer } from './reducers/searchReducer';
import { booksReducer } from './reducers/booksReducer';
import { startIndexReducer } from './reducers/startIndexReducer';
 
const rootReducer = combineReducers({ 
    search: searchReducer,
    books: booksReducer,
    startIndex: startIndexReducer
}) 
   
export const store = createStore(rootReducer) 
 
export type RootState = ReturnType<typeof rootReducer>
