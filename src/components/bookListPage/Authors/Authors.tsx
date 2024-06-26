import classes from './Authors.module.css'
import { StringList } from 'src/constants/types/StringList';

export function Authors({authors}: StringList) {
  return authors.map((author, index) => {
          return <h3 key={index} className={classes.decoratedDescription}>{author}</h3>
    })
}

export default Authors;