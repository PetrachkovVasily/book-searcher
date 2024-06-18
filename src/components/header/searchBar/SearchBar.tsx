import classes from './SearchBar.module.css'

export function SearchBar() {
  return (
    <div className={classes.searchBar}>
       <input className={classes.searchField}></input>
    </div>
  );
}

export default SearchBar;