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
        <Book str={book[0]?.volumeInfo.imageLinks.thumbnail}/>
      </div>
      <div className={classes.descriptionContainer}>
        <Categories categories={book[0]?.volumeInfo.categories}/>
        <div className={classes.nameDescription}>
          <h2 className={classes.bookName}>{book[0]?.volumeInfo.title}</h2>
          <Authors authors={book[0]?.volumeInfo.authors}/>
        </div>
        <Description str={book[0]?.volumeInfo.description}/>
      </div>
    </>
  );
}

export default ItemContent;