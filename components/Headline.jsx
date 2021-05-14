import styles from '../styles/Home.module.css'

export const Headline = (props) => {
  const { page, children } = props

  return (
    <div>
      <h1 className={styles.title}>{page} page</h1>

      <p className={styles.description}>
        Get started by editing {children}
      </p>
    </div>
  )
}
