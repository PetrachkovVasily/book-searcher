import { LOAD_MORE } from "src/constants/notes/Elements";
import classes from './LoadBtn.module.css'

export function LoadBtn() {
  function loadMore() {
    // getBooks().then((items) => {
    //   setBooks(items)
    // })
  }
  return (
    <button className={classes.laodMoreBtn} onClick={loadMore}>{LOAD_MORE}</button>
  );
}

export default LoadBtn;