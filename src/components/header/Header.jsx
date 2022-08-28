import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export function Header()
{
  return (
    <header className={styles.header}>
      <div>
        <img src={igniteLogo} alt="" />
        <span>Ignite Feed</span>
      </div>
    </header>
  )
}