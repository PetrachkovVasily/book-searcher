import { SearchParamsProps } from 'src/constants/types/SearchParamsProps';
import classes from './SearchParams.module.css'
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { CATEGORY, SORT_PARAMS } from 'src/constants/notes/actionTypes';

export function SearchParams({name, sort, params}: SearchParamsProps) {
  
  const state = useTypeSelector(state => state.search)
  const dispatch = useDispatch()
  console.log(state[sort]);

  function selectHandler(event: any) {
    if (sort == 'category') {
      dispatch({type: CATEGORY, payload: event.target.value})
    } else {
      dispatch({type: SORT_PARAMS, payload: event.target.value})
    }
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