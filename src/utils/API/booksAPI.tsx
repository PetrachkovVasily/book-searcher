import axios from "axios";
import { ALL, AMPERSAND, API_KEY, API_LINK, KEY, MAX, ORDER_BY, PLUS, QUESTION, Q_PARAM, SLASH, START_INDEX, SUBJECT } from "src/constants/notes/APIcommands";
import { EMPTY_STR } from "src/constants/notes/Elements";
import { CATEGORIES } from "src/constants/notes/categories";
import { PageCardProps } from "src/constants/types/PageCardType";
import { SearchState } from "src/constants/types/SearchTypes";
import { StartIndexType } from "src/constants/types/StartIndexType";

const link = 'https://www.googleapis.com/books/v1/volumes?q=react+subject:art&orderBy=newest&maxResults=30&startIndex=0'

export async function getBooks(startIndex: StartIndexType, search: SearchState) {  
  let length = 0
  let finalResult = []
  const AMOUNT = 30
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

  while (finalResult.length < AMOUNT) {
    
    const response = await axios.get(API_LINK + Q_PARAM + keyWord + subjectValue + ORDER_BY + search.sortParams + MAX + (AMOUNT - length) + START_INDEX + startIndex.startIndex); 
    console.log(response.data.items);
    
    if (response.data.items == undefined) {
      startIndex.isLoadable = false
      
      return {finalResult, startIndex}
    }
    
    startIndex.startIndex += response.data.items.length
    const res = response.data.items
    if (finalResult[0] === undefined){
      finalResult = res
    } else {
      finalResult.push(...res)
    }
    finalResult = finalResult.filter((item: PageCardProps, index: number, arr: []) => index === arr.findIndex((element: PageCardProps) => element.id === item.id))
    length = finalResult.length
  }

  return {finalResult, startIndex};
}

export async function getBooksByID(id: string | undefined) {
  const response = await axios.get(API_LINK + SLASH + id + QUESTION + KEY + API_KEY);
  
  return response.data;
}