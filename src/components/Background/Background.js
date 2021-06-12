import classes from './Background.module.css';

const Background = (props) => {
  const theColor = '#342224';
  const styles = {
    backgroundColor: theColor,
    color: theColor
  }

  return <div className={classes.background} style={styles}>{props.children}</div>
}

export default Background;