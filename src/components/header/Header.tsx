import { CATEGORIES, CATEGORIES_NAME, SORTS, SORTS_NAME } from 'src/constants/notes/categories';
import classes from './Header.module.css'
import SearchBar from './searchBar/SearchBar';
import SearchParams from './searchParams/SearchParams';
import { CATEGORY_SORT, REVEALANCE_SORT } from 'src/constants/notes/Elements';

export function Header() {
  return (
    <header>
      <div className={classes.innerHeader}>
        <h2 className={classes.headerH}>Search for books</h2>
        <div className={classes.searchBlock}>
          <SearchBar/>
          <div className={classes.sortBlock}>
            <SearchParams name={CATEGORIES_NAME} sort={CATEGORY_SORT} params={CATEGORIES}/>
            <SearchParams name={SORTS_NAME} sort={REVEALANCE_SORT} params={SORTS}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;