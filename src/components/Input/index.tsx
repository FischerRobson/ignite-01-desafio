import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ onChange, value, ...rest }: InputProps) {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder='Adicione uma nova tarefa'
      {...rest}
    />
  )
}