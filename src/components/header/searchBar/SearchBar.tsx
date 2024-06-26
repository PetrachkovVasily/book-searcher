import { SEARCH } from 'src/constants/notes/Elements';
import classes from './SearchBar.module.css'

export function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <input className={classes.searchField} placeholder={SEARCH}></input>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.6845 17.9481C21.1967 16.0576 22.1009 13.6597 22.1009 11.0505C22.1009 4.94746 17.1534 0 11.0505 0C4.94746 0 0 4.94746 0 11.0505C0 17.1534 4.94746 22.1009 11.0505 22.1009C13.6597 22.1009 16.0576 21.1967 17.9481 19.6845L24.9039 26.6404C25.3834 27.1199 26.1609 27.1199 26.6404 26.6404C27.1199 26.1609 27.1199 25.3834 26.6404 24.9039L19.6845 17.9481ZM11.0505 19.6576C6.29688 19.6576 2.44334 15.8041 2.44334 11.0505C2.44334 6.29688 6.29688 2.44334 11.0505 2.44334C15.8041 2.44334 19.6576 6.29688 19.6576 11.0505C19.6576 15.8041 15.8041 19.6576 11.0505 19.6576Z" fill="#0F0F0F"/>
      </svg>
    </div>
  );
}

export default SearchBar;