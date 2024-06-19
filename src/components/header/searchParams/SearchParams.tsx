import classes from './SearchParams.module.css'

export function SearchParams() {
  return (
    <div className={classes.sortParams}>
      <h3 className={classes.sortBy}>Categories</h3>
      <select id="options" name="fruits" className={classes.sortFilter}>
        {/* <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.721957 0.247666C0.426014 0.573851 0.426014 1.10275 0.721957 1.42893L4.42925 5.51127C5.02124 6.16312 5.98046 6.16287 6.57215 5.51077L10.278 1.42592C10.574 1.09974 10.574 0.570844 10.278 0.244651C9.98208 -0.0815504 9.50225 -0.0815504 9.20633 0.244651L6.03449 3.74081C5.73857 4.06707 5.25873 4.06699 4.96281 3.74081L1.79364 0.247666C1.49771 -0.0785353 1.01789 -0.0785353 0.721957 0.247666Z" fill="#0F0F0F"/>
        </svg> */}
        <option value="apple">apple</option>
        <option value="banana">banana</option>
        <option value="orange">orange</option>
      </select>
    </div>
  );
}

export default SearchParams;