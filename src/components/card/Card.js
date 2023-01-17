import styles from "./Card.module.scss"
const Card = ({children ,cardClass}) => {
  return (
    <div className={`${styles.card} ${cardClass}`} style={{borderRadius:"5px"}}>
            {
              children
              //modify 
            }
    </div>
  )
}

export default Card