import Card from '../UI/Card';
import QuoteActions from './QuoteActions';
import QuoteDisplayer from './QuoteDisplayer';
import classes from './QuoteGenerator.module.css'
const QuoteGenerator = () => {
  const quote = 'Start where you are. Use what you have. Do what you can.'

  return <Card className={classes.generator}>
    <QuoteDisplayer quote={quote} className={classes.displayer} />
    <QuoteActions />
  </Card>
}

export default QuoteGenerator;