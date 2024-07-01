// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BookListPage from 'src/components/bookListPage/BookListPage';
import Header from 'src/components/header/Header';
import ItemPage from 'src/components/itemPage/ItemPage';
import { getBooks } from 'src/utils/API/booksAPI';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { HOME_PATH, ID, ITEM_PATH } from 'src/constants/notes/routesPath';

export function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks().then((items) => {
      setBooks(items)
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: HOME_PATH,
      element: <BookListPage books={books}/>,
    },
    {
      path: ITEM_PATH + ID,
      element: <ItemPage/>,
    },
  ]);

  return (
    <div>
      <Header/>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
