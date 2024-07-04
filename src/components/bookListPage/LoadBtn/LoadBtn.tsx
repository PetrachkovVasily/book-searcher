import { LOAD_MORE } from "src/constants/notes/Elements";
import classes from './LoadBtn.module.css'
import { useTypeSelector } from "src/hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { getBooks } from "src/utils/API/booksAPI";
import { ADD_LIST, CHANGE_LOAD, INCREASE } from "src/constants/notes/actionTypes";
import { useState } from "react";

export function LoadBtn() {
  const state = useTypeSelector(state => state)
  const dispatch = useDispatch()
  const [btnColor, setBtnColor] = useState('#555555')

  function loadMore() {
    if (state.startIndex.isLoadable) {
      getBooks(state.startIndex, state.search).then((items) => {
        dispatch({type: ADD_LIST, payload: items.finalResult})  
        dispatch({type: INCREASE, payload: items.startIndex})
        dispatch({type: CHANGE_LOAD, payload: items.startIndex})
      })
    }
  }
  
  return (
    <button className={classes.laodMoreBtn} onClick={loadMore}>{LOAD_MORE}</button>
  );
}

export default LoadBtn;