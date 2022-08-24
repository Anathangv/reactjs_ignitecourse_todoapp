import style from './Header.module.css'
import rocketIcon from  '../../assets/rocket.png'

export function Header(){
  return(
    <div className={style.header}>
      <div className={style.logo}>
        <img src={rocketIcon} alt='image of an rocket' />
        <strong className={style.titleBlue}>to</strong>
        <strong className={style.titlePurple}>do</strong>
      </div>
    </div>
  )
}