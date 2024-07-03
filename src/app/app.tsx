// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BookListPage from 'src/components/bookListPage/BookListPage';
import Header from 'src/components/header/Header';
import ItemPage from 'src/components/itemPage/ItemPage';
import { getBooks } from 'src/utils/API/booksAPI';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { useEffect } from 'react';
import { HOME_PATH, ID, ITEM_PATH } from 'src/constants/notes/routesPath';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { CHANGE_LIST, CHANGE_LOAD, INCREASE } from 'src/constants/notes/actionTypes';

export function App() {

  const state = useTypeSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    getBooks(state.startIndex, state.search).then((items) => {
      dispatch({type: CHANGE_LIST, payload: items.finalResult})
      dispatch({type: INCREASE, payload: items.startIndex})
      dispatch({type: CHANGE_LOAD, payload: items.startIndex})
    })
  }, [])
  

  const router = createBrowserRouter([
    {
      path: HOME_PATH,
      element: <BookListPage books={state.books.books}/>,
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
