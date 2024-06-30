import { useParams } from 'react-router';
import classes from './ItemPage.module.css'
import { useEffect, useState } from 'react';
import { getBooksByID } from 'src/utils/API/booksAPI';
import ItemContent from './ItemContent/ItemContent';

export function ItemPage() {
  const {id} = useParams();
  const [book, setBook] = useState()

  useEffect(() => {
    getBooksByID(id).then((item) => {
      // item = [item]
      setBook(item)
    })
  }, [id])

  return (
    <main className={classes.itemPage}>
      <div className={classes.pageContainer}>
        {book===undefined
          ? <h2>qwerty</h2>
          : <ItemContent book={book}/>
        }
      </div>
    </main>
  );
}

export default ItemPage;