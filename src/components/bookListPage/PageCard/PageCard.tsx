import Book from 'src/components/book/Book';
import classes from './PageCard.module.css'
import { Link } from 'react-router-dom';

export function PageCard() {
  return (
    <Link to={'/item'} className={classes.card}>
      <Book/>
      <div className={classes.description}>
        <h3 className={classes.decoratedDescription}>Category</h3>
        <h3 className={classes.bookName}>Супер Название книги JS Супер Название книги JS Супер Название книги JS Очень длинное</h3>
        <h3 className={classes.decoratedDescription}>Author Name</h3>
      </div>
    </Link>
  );
}

export default PageCard;