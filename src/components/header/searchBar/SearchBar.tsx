import { SEARCH } from 'src/constants/notes/Elements';
import classes from './SearchBar.module.css'
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { CHANGE_LIST, CHANGE_LOAD, INCREASE, SEARCH_LINE } from 'src/constants/notes/actionTypes';
import { getBooks } from 'src/utils/API/booksAPI';
import { ENTER } from 'src/constants/notes/numOnstants';
import SearchImg from '../searchImg/searchImg';

export function SearchBar() {
  const state = useTypeSelector(state => state)
  const dispatch = useDispatch()
  const decreseValue = {startIndex: 0, isLoadable: true, total: state.startIndex.total}
  const options = state.search

  function searchHandler(event: any) {
    dispatch({type: SEARCH_LINE, payload: event.target.value})
    options.searchLine = event.target.value
  }

  function searchTrigger() {
    getBooks(decreseValue, options).then((items) => {
      dispatch({type: CHANGE_LIST, payload: items.finalResult})  
      dispatch({type: INCREASE, payload: items.startIndex})
      dispatch({type: CHANGE_LOAD, payload: items.startIndex})
    })
  }

  function focusHandler(event: any) {
    if (event.keyCode == ENTER) {
      searchTrigger()
    }
  }
  return (
    <div className={classes.searchBar}>
      <input onKeyDown={focusHandler} onChange={searchHandler} className={classes.searchField} placeholder={SEARCH} value={state.search.searchLine}></input>
      <button onClick={searchTrigger} className={classes.searchBtn}>
        <SearchImg/>
      </button>
    </div>
  );
}

export default SearchBar;