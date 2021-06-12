import Button from '../UI/Button';
import TwitterIcon from '../Icons/Twitter';
import TumblrIcon from '../Icons/Tumblr';
import classes from './QuoteActions.module.css';

const QuoteActions = () => {
  return <div className={classes.actions}>
    <div className={classes.social}>
      <Button><TwitterIcon color="white" size="16"/></Button>
      <Button><TumblrIcon color="white" size="16"/></Button>
    </div>

    <Button>New Quote</Button>
  </div>
}

export default QuoteActions;