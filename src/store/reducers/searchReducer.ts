import { EMPTY_STR } from "src/constants/notes/Elements"
import { CATEGORY, SEARCH_LINE, SORT_PARAMS } from "src/constants/notes/actionTypes"
import { CATEGORIES, SORTS } from "src/constants/notes/categories"
import { SearchState, searchAction } from "src/constants/types/SearchTypes"

const initilStore: SearchState = {
  searchLine: EMPTY_STR,
  category: CATEGORIES[0],
  sortParams: SORTS[0]
}

export const searchReducer = (state = initilStore, action: searchAction): SearchState => {
  switch (action.type) {
    case SEARCH_LINE:
      return {...state, searchLine: action.payload}
    case CATEGORY:
      return {...state, category: action.payload}
    case SORT_PARAMS:
      return {...state, sortParams: action.payload}
    default:
      return state
  }
}