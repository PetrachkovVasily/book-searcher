export interface SearchState {
  searchLine: string;
  [index: string]: string;
}

export interface searchAction {
  type: string;
  payload: string;
}