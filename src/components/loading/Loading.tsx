import classes from './Loading.module.css';

export function Loading() {
  return (
    <div className={classes.loadContainer}>
      <h2 className={classes.loadIndicator}>Loading...</h2>
    </div>
  );
}

export default Loading;