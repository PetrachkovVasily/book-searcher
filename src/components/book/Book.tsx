import classes from './Book.module.css'

export function Book() {
  return (
    <div className={classes.book}>
      <img src="./assets/shark.jpg" alt="bookId!!!" className={classes.bookImg}/>
    </div>
  );
}

export default Book;