import axios from "axios";
import { ALL, AMPERSAND, API_KEY, API_LINK, KEY, QUESTION, Q_PARAM, SLASH } from "src/constants/notes/APIcommands";
import { PageCardProps } from "src/constants/types/PageCardType";

const categoryLink = 'https://www.googleapis.com/books/v1/volumes?q=subject=philosophy'
const searchBarLink = 'https://www.googleapis.com/books/v1/volumes?q=intitle=&maxResults=30&orderBy=newest'
const newestLink = 'https://www.googleapis.com/books/v1/volumes?q='

export async function getBooks() {  
  let length = 0;
  let startIndex = 0;
  let finalResult = []

  while (finalResult.length < 30) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle=&startIndex=${startIndex}&maxResults=${30 - length}&orderBy=newest`); 
    startIndex += response.data.items.length
    const res = response.data.items.filter((item: PageCardProps, index: number, arr: []) => index === arr.findIndex((element: PageCardProps) => element.id === item.id))
    if (finalResult[0] === undefined){
      finalResult = res
    } else {
      finalResult.push(...res)
    }
    finalResult = finalResult.filter((item: PageCardProps, index: number, arr: []) => index === arr.findIndex((element: PageCardProps) => element.id === item.id))
    length = finalResult.length
    console.log(startIndex); 
  }
  
  
  return finalResult;
}

export async function getBooksByID(id: string | undefined) {
  const response = await axios.get(API_LINK + SLASH + id + QUESTION + KEY + API_KEY);
  console.log(response.data.volumeInfo);
  
  return response.data;
}