import styles from './styles.module.scss'

const FullCard = ({phoneNumber,
                    email,
                    date,
                    position,
                    division,
                    extraInfo}) => {
  return (
    <div className={styles.fullCard}>
      <div className={styles.rows}>
        <span>Телефон:</span> <span>{phoneNumber}</span>
        <span>Почта:</span> <span>{email}</span>
        <span>Дата приема:</span> <span>{date}</span>
        <span>Должность:</span> <span>{position}</span>
        <span>Подразделение:</span> <span>{division}</span>
      </div>
      <div className={styles.extraInfo}>
        <span>Дополнительная информация:</span>
        <span>{extraInfo}</span>
      </div>
    </div>
  )
}

export {FullCard}