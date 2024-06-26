export type PageCardProps = {
  id: string;
  info: {
    authors: string[];
    categories: {
      [index: number]: string;
    }
    comicsContent: true
    description: string
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    infoLink: string
    language: string
    maturityRating: string
    pageCount: number
    previewLink: string
    publisher: string
    title: string
  }
}