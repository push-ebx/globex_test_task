import {Input} from "@/components/Input";
import {Card} from "@/components/Card";
import styles from "./styles.module.scss"
import {Popup} from "@/components/Popup";
import {useEffect, useState} from "react";
import {FullCard} from "@/components/FullCard";
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState([])
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [indexCard, setIndexCard] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchEmployees()
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get('http://localhost:3000')
    setEmployees(prev => res.data)
  }

  const onClickCard = index => {
    setIndexCard(index)
    setPopupIsOpen(true)
  }

  const searching = async value => {
    setSearchQuery(value)
    const res = await axios.get(`http://localhost:3000?term=${value}`)
    setEmployees(prev => res.data)
  }

  return (
    <div className={styles.app}>
      <Popup title={employees[indexCard]?.name} isOpen={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
        <FullCard
          phoneNumber={employees[indexCard]?.phone}
          email={employees[indexCard]?.email}
          date={employees[indexCard]?.hire_date}
          position={employees[indexCard]?.position_name}
          division={employees[indexCard]?.department}
          extraInfo={employees[indexCard]?.address}
        />
      </Popup>

      <Input value={searchQuery} onChange={value => searching(value)} className={styles.input}/>

      <div className={styles.cards}>
        { employees.length ?
          employees.map((employee, i) => (
            <Card
              key={i}
              fullName={employee.name}
              phoneNumber={employee.phone}
              email={employee.email}
              onClickCard={() => onClickCard(i)}
            />
          )) :
          <h1 style={{color: 'var(--plumbum-color)'}}>Загрузка...</h1>
        }
      </div>
    </div>
  )
}

export {App}
