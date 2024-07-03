import { CHANGE_LOAD, DECREASE, INCREASE } from "src/constants/notes/actionTypes"
import { StartIndexType, startIndexAction } from "src/constants/types/StartIndexType"


const initilStore: StartIndexType = {
  startIndex: 0,
  isLoadable: true
}

export const startIndexReducer = (state = initilStore, action: startIndexAction): StartIndexType => {
  switch (action.type) {
    case INCREASE:
      return {...state, startIndex: state.startIndex + action.payload.startIndex}
    case DECREASE:
      return {...state, startIndex: 0}
    case CHANGE_LOAD:
      return {...state, isLoadable: action.payload.isLoadable}
    default:
      return state
  }
}