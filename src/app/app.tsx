import Header from 'src/components/header/Header';
import { getBooks } from 'src/utils/API/booksAPI';
import { useEffect, useRef } from 'react';
import { useTypeSelector } from 'src/hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { CHANGE_LIST, CHANGE_LOAD, INCREASE } from 'src/constants/notes/actionTypes';
import { router } from 'src/routes/routes';
import { RouterProvider } from 'react-router-dom';

export function App() {

  const state = useTypeSelector(state => state)
  const dispatch = useDispatch()
  const isDataRequested = useRef(false)

  useEffect(() => {
    if (!isDataRequested.current) {
      isDataRequested.current = true;
      getBooks(state.startIndex, state.search).then((items) => {
        dispatch({type: CHANGE_LIST, payload: items.finalResult})
        dispatch({type: INCREASE, payload: items.startIndex})
        dispatch({type: CHANGE_LOAD, payload: items.startIndex})
      })
    }
  }, [])

  return (
    <div>
      <Header/>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
