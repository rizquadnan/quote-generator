import classes from "./QuoteDisplayer.module.css";
import QuoteIcon from '../Icons/Quote';

const QuoteDisplayer = (props) => {
  return (
    <blockquote className={props.className}>
      <div className={classes.quote}>
        <div className={classes.decoration}>
          <QuoteIcon color="#342224"/>
        </div>
        <span className={classes.text}>{props.quote}</span>
      </div>
      <small className={classes.person}>Arthur Ashe</small>
    </blockquote>
  );
};

export default QuoteDisplayer;
