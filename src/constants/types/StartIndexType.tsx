export type StartIndexType = {
  startIndex: number,
  isLoadable: boolean,
  total: number
}

export interface startIndexAction {
  type: string;
  payload: {
    startIndex: number,
    isLoadable: boolean,
    total: number
  }
}