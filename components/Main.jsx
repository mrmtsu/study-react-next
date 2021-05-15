import { Headline } from '../components/Headline'
import { Links } from '../components/Links'
import classes from './Main.module.css'

export const Main = (props) => {
  const { page } = props;

  return (
    <main className={classes.main}>
      <Headline page={page}>
          <code className={classes.code}>pages/{page}.js</code>
        </Headline>
      <Links />
    </main>
  )
}
