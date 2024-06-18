import classes from './BookListPage.module.css'
import PageCard from './PageCard/PageCard';

export function BookListPage() {
  return (
    <main>
      <h2 className={classes.foundHeader}>Found 456 results</h2>
      <div className={classes.pageCards}>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
        <PageCard/>
      </div>
    </main>
  );
}

export default BookListPage;