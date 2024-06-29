export interface SearchState {
  searchLine: string;
  category: string;
  sortParams: string;
  loading: boolean;
  error: null | string;
}

export interface searchAction {
  type: string;
  payload: string;
}