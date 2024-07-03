import { SEARCH } from 'src/constants/notes/Elements';
import classes from './SearchBar.module.css'
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { CHANGE_LIST, CHANGE_LOAD, INCREASE, SEARCH_LINE } from 'src/constants/notes/actionTypes';
import { getBooks } from 'src/utils/API/booksAPI';

export function SearchBar() {
  const state = useTypeSelector(state => state)
  const dispatch = useDispatch()
  const decreseValue = {startIndex: 0, isLoadable: true}
  const options = state.search

  function searchHandler(event: any) {
    dispatch({type: SEARCH_LINE, payload: event.target.value})
    options.searchLine = event.target.value
  }

  function searchTrigger(event: any) {
    getBooks(decreseValue, options).then((items) => {
      dispatch({type: CHANGE_LIST, payload: items.finalResult})  
      dispatch({type: INCREASE, payload: items.startIndex})
      dispatch({type: CHANGE_LOAD, payload: items.startIndex})
    })
  }

  function focusHandler(event: any) {
    if (event.keyCode == 13) {
      
      console.log('qwertyui1111'); // код клавиши Enter
      searchTrigger(event)
    }
  }
  return (
    <div className={classes.searchBar}>
      <input onKeyDown={focusHandler} onChange={searchHandler} className={classes.searchField} placeholder={SEARCH} value={state.search.searchLine}></input>
      <button onClick={searchTrigger} className={classes.searchBtn}>
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.6845 17.9481C21.1967 16.0576 22.1009 13.6597 22.1009 11.0505C22.1009 4.94746 17.1534 0 11.0505 0C4.94746 0 0 4.94746 0 11.0505C0 17.1534 4.94746 22.1009 11.0505 22.1009C13.6597 22.1009 16.0576 21.1967 17.9481 19.6845L24.9039 26.6404C25.3834 27.1199 26.1609 27.1199 26.6404 26.6404C27.1199 26.1609 27.1199 25.3834 26.6404 24.9039L19.6845 17.9481ZM11.0505 19.6576C6.29688 19.6576 2.44334 15.8041 2.44334 11.0505C2.44334 6.29688 6.29688 2.44334 11.0505 2.44334C15.8041 2.44334 19.6576 6.29688 19.6576 11.0505C19.6576 15.8041 15.8041 19.6576 11.0505 19.6576Z" fill="#0F0F0F"/>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;