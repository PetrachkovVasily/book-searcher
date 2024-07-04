import { StringType } from 'src/constants/types/StringType';
import classes from './Description.module.css'
import { EMPTY_STR } from 'src/constants/notes/Elements';

export function Description({str}: StringType) {

  function refactorStr(str: string | undefined) {
    return str?.replace(/<[^>]*>/g, EMPTY_STR);
  }

  return (
    <p className={classes.details}>{refactorStr(str)}</p>
  )
}

export default Description;