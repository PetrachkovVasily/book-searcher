import { PageCardProps } from "./PageCardType"

export type BookListPageProps = {
  books: PageCardProps[]
}

export interface booksAction {
  type: string;
  payload: PageCardProps[];
}