import { CHANGE_LOAD, CHANGE_TOTAL, DECREASE, INCREASE } from "src/constants/notes/actionTypes"
import { StartIndexType, startIndexAction } from "src/constants/types/StartIndexType"


const initilStore: StartIndexType = {
  startIndex: 0,
  isLoadable: true,
  total: 0
}

export const startIndexReducer = (state = initilStore, action: startIndexAction): StartIndexType => {
  switch (action.type) {
    case INCREASE:
      return {...state, startIndex: action.payload.startIndex}
    case DECREASE:
      return {...state, startIndex: 0}
    case CHANGE_LOAD:
      return {...state, isLoadable: action.payload.isLoadable}
    case CHANGE_TOTAL:
      return {...state, total: action.payload.total}
    default:
      return state
  }
}