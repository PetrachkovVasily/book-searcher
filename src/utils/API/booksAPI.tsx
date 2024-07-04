import axios from "axios";
import { AMPERSAND, API_KEY, API_LINK, KEY, MAX, ORDER_BY, PLUS, QUESTION, Q_PARAM, SLASH, START_INDEX, SUBJECT } from "src/constants/notes/APIcommands";
import { EMPTY_STR } from "src/constants/notes/Elements";
import { CATEGORIES } from "src/constants/notes/categories";
import { AMOUNT } from "src/constants/notes/numOnstants";
import { SearchState } from "src/constants/types/SearchTypes";
import { StartIndexType } from "src/constants/types/StartIndexType";

export async function getBooks(startIndex: StartIndexType, search: SearchState) {  
  let subjectValue = SUBJECT + search.category
  let keyWord = search.searchLine + PLUS
  if (search.category == CATEGORIES[0]) {
    subjectValue = EMPTY_STR
  } else {
    subjectValue += AMPERSAND
  }
  if (search.searchLine == EMPTY_STR) {
    keyWord = EMPTY_STR
  }
  const response = await axios.get(API_LINK + Q_PARAM + keyWord + subjectValue + ORDER_BY + search.sortParams + MAX + AMOUNT + START_INDEX + startIndex.startIndex + AMPERSAND + KEY + API_KEY); 
  if (response.data.items == undefined) {
    startIndex.isLoadable = false
    return {finalResult: [], startIndex}
  }
  
  const finalResult = response.data.items

  startIndex.startIndex += AMOUNT
  startIndex.total = response.data.totalItems
  if (startIndex.total <= AMOUNT) {
    startIndex.isLoadable = false
  }
  return {finalResult, startIndex};
}

export async function getBooksByID(id: string | undefined) {
  const response = await axios.get(API_LINK + SLASH + id + QUESTION + KEY + API_KEY);
  
  return response.data;
}