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
        <div className={styles.rowNames}>
          <span>Телефон:</span>
          <span>Почта:</span>
          <span>Дата приема:</span>
          <span>Должность:</span>
          <span>Подразделение:</span>
        </div>
        <div className={styles.rowValues}>
          <span>{phoneNumber}</span>
          <span>{email}</span>
          <span>{date}</span>
          <span>{position}</span>
          <span>{division}</span>
        </div>
      </div>
      <div className={styles.extraInfo}>
        <span>Дополнительная информация:</span>
        <span>{extraInfo}</span>
      </div>
    </div>
  )
}

export {FullCard}