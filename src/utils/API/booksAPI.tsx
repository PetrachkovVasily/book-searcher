import axios from "axios";
import { ALL, AMPERSAND, API_KEY, API_LINK, KEY, QUESTION, Q_PARAM, SLASH } from "src/constants/notes/APIcommands";

export async function getBooks(filter: string, sort: string) {
  const response = await axios.get(API_LINK + Q_PARAM + ALL + AMPERSAND + KEY + API_KEY);
  return response.data.items;
}

export async function getBooksByID(id: string | undefined) {
  const response = await axios.get(API_LINK + SLASH + id + QUESTION + KEY + API_KEY);
  return response.data;
}