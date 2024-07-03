import { SearchParamsProps } from 'src/constants/types/SearchParamsProps';
import classes from './SearchParams.module.css'
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { ADD_LIST, CATEGORY, CHANGE_LIST, CHANGE_LOAD, DECREASE, INCREASE, SORT_PARAMS } from 'src/constants/notes/actionTypes';
import { getBooks } from 'src/utils/API/booksAPI';

export function SearchParams({name, sort, params}: SearchParamsProps) {
  
  const state = useTypeSelector(state => state)
  const dispatch = useDispatch()
  const decreseValue = {startIndex: 0, isLoadable: true}
  const options = state.search

  function selectHandler(event: any) {
    if (sort == 'category') {
      dispatch({type: CATEGORY, payload: event.target.value})
      options.category = event.target.value
    } else {
      dispatch({type: SORT_PARAMS, payload: event.target.value})
      options.sortParams = event.target.value
    }

    dispatch({type: DECREASE, payload: decreseValue})

    getBooks(decreseValue, options).then((items) => {
      dispatch({type: CHANGE_LIST, payload: items.finalResult})  
      dispatch({type: INCREASE, payload: items.startIndex})
      dispatch({type: CHANGE_LOAD, payload: items.startIndex})
    })
  }

  return (
    <div className={classes.sortParams}>
      <h3 className={classes.sortBy}>{name}</h3>
      <select onChange={selectHandler} name={name} className={classes.sortFilter}>
        {
          params.map(param => {
            return (
              <option key={param} value={param}>{param}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default SearchParams;