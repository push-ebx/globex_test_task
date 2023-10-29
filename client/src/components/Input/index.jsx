import styles from './styles.module.scss'
import clsx from "clsx";

const Input = ({inputRef, className, onChange, value}) => {
  return (
    <input
      ref={inputRef}
      className={clsx(styles.input, className)}
      type="text"
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  )
}

export {Input}