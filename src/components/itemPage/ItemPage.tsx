import Book from '../book/Book';
import classes from './ItemPage.module.css'

export function ItemPage() {
  return (
    <main>
      <div className={classes.pageContainer}>
        <div className={classes.imgContainer}>
          <Book/>
        </div>
        <div className={classes.descriptionContainer}>

        </div>
      </div>
    </main>
  );
}

export default ItemPage;