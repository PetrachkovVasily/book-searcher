// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BookListPage from 'src/components/bookListPage/BookListPage';
import Header from 'src/components/header/Header';
import ItemPage from 'src/components/itemPage/ItemPage';
import { getBooks } from 'src/utils/API/booksAPI';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { useEffect, useState } from 'react';

export function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks('a', 'b').then((items) => {
      setBooks(items)
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <BookListPage books={books}/>,
    },
    {
      path: '/item/:id',
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
