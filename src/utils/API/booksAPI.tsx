import axios from "axios";

const API_LINK = 'https://www.googleapis.com/books/v1/volumes';
const Q_PARAM = '?q='
const API_KEY = 'AIzaSyAIKiUMjuQ7GkE3gp0YWAx1nSQpkyZqHvk';
const KEY = 'all&key=';

export async function getBooks(filter: string, sort: string) {
  const response = await axios.get(API_LINK + Q_PARAM + KEY + API_KEY);
  return response.data.items;
}

export async function getBooksByID(id: string | undefined) {
  const response = await axios.get('https://www.googleapis.com/books/v1/volumes/' + id);
  return response.data;
}