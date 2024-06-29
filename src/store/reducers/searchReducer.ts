import { SearchState, searchAction } from "src/constants/types/SearchTypes"

const initilStore: SearchState = {
  searchLine: '',
  category: '',
  sortParams: '',
  loading: false,
  error: null
}

export const searchReducer = (state = initilStore, action: searchAction): SearchState => {
  switch (action.type) {
    case 'SEARCH_LINE':
      return {...state, loading: true}
    case 'CATEGORY':
      return {...state, loading: true}
    case 'SORT_PARAMS':
      return {...state, loading: true}
    default:
      return state
  }
}