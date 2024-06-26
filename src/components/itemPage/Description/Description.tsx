import { StringType } from 'src/constants/types/StringType';
import classes from './Description.module.css'

export function Description({str}: StringType) {

  function refactorStr(str: string | undefined) {
    return str?.split('<p>').join('').split('</p>').join('');
  }

  return (
    <p className={classes.details}>{refactorStr(str)}</p>
  )
}

export default Description;