import Book from 'src/components/book/Book';
import classes from './PageCard.module.css'
import { Link } from 'react-router-dom';
import { PageCardProps } from 'src/constants/types/PageCardType';
import Authors from '../Authors/Authors';
import { ITEM_PATH } from 'src/constants/notes/routesPath';
import { EMPTY_STR } from 'src/constants/notes/elements';

export function PageCard({id, volumeInfo}: PageCardProps) {
  return (
    <Link to={`${ITEM_PATH}${id}`} className={classes.card}>
      <Book str={volumeInfo.imageLinks?.smallThumbnail}/>
      <div className={classes.description}>
        <h3 className={classes.decoratedDescription}>
          {
            volumeInfo.categories===undefined
            ? EMPTY_STR
            : volumeInfo.categories[0]
          }
        </h3>
        <h3 className={classes.bookName}>
          {
            volumeInfo.title===undefined
            ? EMPTY_STR
            : volumeInfo.title
          }
        </h3>
        {
          volumeInfo.authors===undefined
          ? EMPTY_STR
          : <Authors authors={volumeInfo.authors}/>
        }
      </div>
    </Link>
  );
}

export default PageCard;