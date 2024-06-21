import classes from './SearchParams.module.css'

export function SearchParams() {
  return (
    <div className={classes.sortParams}>
      <h3 className={classes.sortBy}>Categories</h3>
      <select id="options" name="fruits" className={classes.sortFilter}>
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
    </div>
  );
}

export default SearchParams;