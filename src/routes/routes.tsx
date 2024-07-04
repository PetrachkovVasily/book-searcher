import { createBrowserRouter } from "react-router-dom";
import BookListPage from "src/components/bookListPage/BookListPage";
import ItemPage from "src/components/itemPage/ItemPage";
import { HOME_PATH, ID, ITEM_PATH } from "src/constants/notes/routesPath";
import { useTypeSelector } from "src/hooks/useTypeSelector";


export function useRouterDispacth() {
  const state = useTypeSelector(state => state)
  return state.books.books
} 

export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <BookListPage/>,
  },
  {
    path: ITEM_PATH + ID,
    element: <ItemPage/>,
  },
]);