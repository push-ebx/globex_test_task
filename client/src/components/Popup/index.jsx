import styles from './styles.module.scss'
import clsx from "clsx";
import cross from "@/assets/icons/cross.svg"

const Popup = ({isOpen, onClose, title, children}) => {
  return (
    <div className={clsx(styles.popup, isOpen && styles.active)} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.cross} src={cross} alt="cross" onClick={onClose}/>
        {children}
      </div>
    </div>
  )
}

export {Popup}