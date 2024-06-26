import Book from 'src/components/book/Book';
import classes from './PageCard.module.css'
import { Link } from 'react-router-dom';
import { PageCardProps } from 'src/constants/types/PageCardType';
import Authors from '../Authors/Authors';
import { ITEM_PATH } from 'src/constants/notes/routesPath';

export function PageCard({id, info}: PageCardProps) {
  return (
    <Link to={`${ITEM_PATH}${id}`} className={classes.card}>
      <Book str={info.imageLinks.smallThumbnail}/>
      <div className={classes.description}>
        <h3 className={classes.decoratedDescription}>{info.categories[0]}</h3>
        <h3 className={classes.bookName}>{info.title}</h3>
        <Authors authors={info.authors}/>
      </div>
    </Link>
  );
}

export default PageCard;