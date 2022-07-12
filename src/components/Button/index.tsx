import { PlusCircle } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button({ onClick, ...rest }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      {...rest}
    >
      Criar
      <PlusCircle weight="bold" />
    </button>
  )
}