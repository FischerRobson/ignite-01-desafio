import styles from './styles.module.css'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt='todo logo' />
    </div>
  )
}