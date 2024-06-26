import Book from 'src/components/book/Book';
import classes from './ItemContent.module.css';
import { PageCardProps } from 'src/constants/types/PageCardType';
import { ItemContentProps } from 'src/constants/types/ItemContentType';

export function ItemContent({book}: ItemContentProps) {
  console.log(book[0]?.id)
  return (
    <>
      <div className={classes.imgContainer}>
        <Book image='aaa'/>
      </div>
      <div className={classes.descriptionContainer}>
        <h3 className={classes.decoratedHeader}>Art/General</h3>
        <div className={classes.nameDescription}>
          <h2 className={classes.bookName}>{book[0]?.volumeInfo.title}</h2>
          <h3 className={classes.decoratedHeader}>Author Name</h3>
        </div>
        <p className={classes.details}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </>
  );
}

export default ItemContent;