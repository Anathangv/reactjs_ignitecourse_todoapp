import style from './Empty.module.css';
import emptyList from '../../assets/emptyList.png';

export function Empty(){
  return(
    <div className={style.emptyContainer}>
      <img src={emptyList}/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens e fazer</span>
    </div>
  );
}