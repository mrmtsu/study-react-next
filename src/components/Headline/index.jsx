import classes from 'src/components/Headline/Headline.module.css'

export const Headline = (props) => {
  const { page, children } = props

  return (
    <div>
      <h1 className={classes.title}>{page} page</h1>

      <p className={classes.description}>
        アイテムの数は{props.children}個です
      </p>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  )
}
