import classes from './Header.module.css'
import SearchBar from './searchBar/SearchBar';
import SearchParams from './searchParams/SearchParams';

export function Header() {
  return (
    <header>
      <div className={classes.innerHeader}>
        <h2 className={classes.headerH}>Search for books</h2>
        <div className={classes.searchBlock}>
          <SearchBar/>
          <div className={classes.sortBlock}>
            <SearchParams/>
            <SearchParams/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;