// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BookListPage from 'src/components/bookListPage/BookListPage';
import styles from './app.module.css';
import Header from 'src/components/header/Header';
import ItemPage from 'src/components/itemPage/ItemPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

export function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <BookListPage/>,
    },
    {
      path: '/item',
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
