import { ADD_LIST, CHANGE_LIST } from "src/constants/notes/actionTypes"
import { BookListPageProps, booksAction } from "src/constants/types/BookListPageProps"
import { PageCardProps } from "src/constants/types/PageCardType"


const initilStore: BookListPageProps = {
  books: []
}

export const booksReducer = (state = initilStore, action: booksAction): BookListPageProps => {
  switch (action.type) {
    case ADD_LIST:
      return {...state, books: [...state.books, ...action.payload]}
    case CHANGE_LIST:
      state.books = []
      return {...state, books: [...action.payload]}
    default:
      return state
  }
}