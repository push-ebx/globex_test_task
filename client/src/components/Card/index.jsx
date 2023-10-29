import styles from './styles.module.scss'
import clsx from "clsx";
import phone from "@/assets/icons/phone.svg"
import message from "@/assets/icons/message.svg"

const Card = ({fullName, phoneNumber, email, className, onClickCard}) => {
  return (
    <div className={clsx(styles.card, className)} onClick={onClickCard}>
      <h2>{fullName}</h2>
      <span><img src={phone} alt=""/>{phoneNumber}</span>
      <span><img src={message} alt=""/>{email}</span>
    </div>
  )
}

export {Card}