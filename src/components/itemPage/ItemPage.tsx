import Book from '../book/Book';
import classes from './ItemPage.module.css'

export function ItemPage() {
  return (
    <main className={classes.itemPage}>
      <div className={classes.pageContainer}>
        <div className={classes.imgContainer}>
          <Book/>
        </div>
        <div className={classes.descriptionContainer}>
          <h3 className={classes.decoratedHeader}>Art/General</h3>
          <div className={classes.nameDescription}>
            <h2 className={classes.bookName}>Book name</h2>
            <h3 className={classes.decoratedHeader}>Author Name</h3>
          </div>
          <p className={classes.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </main>
  );
}

export default ItemPage;