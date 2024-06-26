import { SearchParamsProps } from 'src/constants/types/SearchParamsProps';
import classes from './SearchParams.module.css'

export function SearchParams({name, params}: SearchParamsProps) {
  return (
    <div className={classes.sortParams}>
      <h3 className={classes.sortBy}>Categories</h3>
      <select name="name" className={classes.sortFilter}>
        {
          params.map(param => {
            return (
              <option key={param} value="param">{param}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default SearchParams;