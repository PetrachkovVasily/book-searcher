import { useTypeSelector } from 'src/hooks/useTypeSelector';
import Loading from '../loading/Loading';
import classes from './BookListPage.module.css'
import LoadBtn from './LoadBtn/LoadBtn';
import PageCard from './PageCard/PageCard';

export function BookListPage() {
  const state = useTypeSelector(state => state)
  const books = state.books.books
  return (
    <main className={classes.bookListPage}>
      {books[0] == undefined
        ? <Loading/>
        : <>
          <h2 className={classes.foundHeader}>Found {state.startIndex.total} results</h2>
          <div className={classes.pageCards}>
            {
              books.map((item) => {
                return <PageCard key={Date.now() + item.id} id={item.id} volumeInfo={item.volumeInfo}/>;
              })
            }
          </div>
          <LoadBtn/>
        </>
      }
    </main>
  );
}

export default BookListPage;