import Book from 'src/components/book/Book';
import classes from './ItemContent.module.css';
import { ItemContentProps } from 'src/constants/types/ItemContentType';
import Authors from 'src/components/bookListPage/Authors/Authors';
import Categories from '../Categories/Categories';
import Description from '../Description/Description';

export function ItemContent({book}: ItemContentProps) {
  return (
    <>
      <div className={classes.imgContainer}>
        <Book str={book.volumeInfo.imageLinks?.thumbnail}/>
      </div>
      <div className={classes.descriptionContainer}>
        <Categories categories={book.volumeInfo.categories}/>
        <div className={classes.nameDescription}>
          <h2 className={classes.bookName}>{book.volumeInfo.title}</h2>
          <Authors authors={book.volumeInfo.authors}/>
        </div>
        <Description str={book.volumeInfo.description}/>
      </div>
    </>
  );
}

export default ItemContent;