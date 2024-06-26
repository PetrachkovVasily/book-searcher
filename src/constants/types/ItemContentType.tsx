export type ItemContentProps = {
  book: {
    id: string;
    volumeInfo: {
      authors: string[];
      categories: string[];
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
  }[]
}