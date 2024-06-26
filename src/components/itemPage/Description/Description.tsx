import { StringType } from 'src/constants/types/StringType';
import classes from './Description.module.css'
import { EMPTY_STR, P, P_SLASH } from 'src/constants/notes/Elements';

export function Description({str}: StringType) {

  function refactorStr(str: string | undefined) {
    return str?.split(P).join(EMPTY_STR).split(P_SLASH).join(EMPTY_STR);
  }

  return (
    <p className={classes.details}>{refactorStr(str)}</p>
  )
}

export default Description;