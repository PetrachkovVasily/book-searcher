import classes from './Book.module.css'
import { StringType } from 'src/constants/types/StringType';

export function Book({image}: StringType) {
  return (
    <div className={classes.book}>
      <img src={image} alt="bookImage" className={classes.bookImg}/>
    </div>
  );
}

export default Book;