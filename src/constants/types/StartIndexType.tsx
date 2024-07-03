export type StartIndexType = {
  startIndex: number,
  isLoadable: boolean
}

export interface startIndexAction {
  type: string;
  payload: {
    startIndex: number,
    isLoadable: boolean
  }
}