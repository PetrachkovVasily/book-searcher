import classes from './Categories.module.css'
import { CategoriesProps } from 'src/constants/types/CategoriesType';

export function Categories({categories}: CategoriesProps) {
  return (
    <div className={classes.categoriesContainer}>
      {
        categories?.map((category, index) => {
          return <h3 key={index} className={classes.decoratedHeader}>{category}</h3>
        })
      }
    </div>
  )
}

export default Categories;