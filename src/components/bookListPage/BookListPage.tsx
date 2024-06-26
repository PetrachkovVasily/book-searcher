import classes from './BookListPage.module.css'
import PageCard from './PageCard/PageCard';
import { BookListPageProps } from 'src/constants/types/BookListPageProps';

export function BookListPage({books}: BookListPageProps) {
  console.log(books[0])
  return (
    <main className={classes.bookListPage}>
      <h2 className={classes.foundHeader}>Found {books.length} results</h2>
      <div className={classes.pageCards}>
        {
          books.map((item) => {
            return <PageCard key={item.id} id={item.id} info={item.volumeInfo}/>;
          })
        }
      </div>
    </main>
  );
}

export default BookListPage;