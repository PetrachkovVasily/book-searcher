import { BOOK_IMAGE } from 'src/constants/notes/elements';
import classes from './Book.module.css'
import { StringType } from 'src/constants/types/StringType';

export function Book({str}: StringType) {
  return (
    <div className={classes.book}>
      <img src={str} alt={BOOK_IMAGE} className={classes.bookImg}/>
    </div>
  );
}

export default Book;