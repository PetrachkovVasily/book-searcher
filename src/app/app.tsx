// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BookListPage from 'src/components/bookListPage/BookListPage';
import styles from './app.module.css';
import Header from 'src/components/header/Header';
import ItemPage from 'src/components/itemPage/ItemPage';

export function App() {
  return (
    <div>
      <Header/>
      <ItemPage/>
      {/* <BookListPage/> */}
    </div>
  );
}

export default App;
