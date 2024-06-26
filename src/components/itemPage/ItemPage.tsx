import { useParams } from 'react-router';
import classes from './ItemPage.module.css'
import { useEffect, useState } from 'react';
import { getBooksByID } from 'src/utils/API/booksAPI';
import ItemContent from './ItemContent/ItemContent';
import { ItemContentProps } from 'src/constants/types/ItemContentType';

export function ItemPage() {
  //const {id} = useParams();
  const [book, setBook] = useState([])

  useEffect(() => {
    getBooksByID('jOZBEAAAQBAJ').then((item) => {
      item = [item]
      setBook(item)
    })
  }, [])

  return (
    <main className={classes.itemPage}>
      <div className={classes.pageContainer}>
        <ItemContent book={book}/>
      </div>
    </main>
  );
}

export default ItemPage;