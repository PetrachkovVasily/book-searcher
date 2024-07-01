import classes from './BookListPage.module.css'
import LoadBtn from './LoadBtn/LoadBtn';
import PageCard from './PageCard/PageCard';
import { BookListPageProps } from 'src/constants/types/BookListPageProps';

export function BookListPage({books}: BookListPageProps) {
  return (
    <main className={classes.bookListPage}>
      <h2 className={classes.foundHeader}>Found {books.length} results</h2>
      <div className={classes.pageCards}>
        {
          books.map((item) => {
            return <PageCard key={item.id} id={item.id} volumeInfo={item.volumeInfo}/>;
          })
        }
      </div>
      <LoadBtn/>
    </main>
  );
}

export default BookListPage;