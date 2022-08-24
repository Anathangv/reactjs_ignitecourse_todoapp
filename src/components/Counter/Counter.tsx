import styles from "./Counter.module.css"

interface IcounterProps{
  taskCount: number;
  taskSelectedCount?: number;
  description: string;
  type: 'totalTask' | 'doneTask';
}

export function Counter({taskCount, taskSelectedCount, description, type}: IcounterProps){
  
  return(
    <div className={styles.counter}>
      <span>{description}</span>
      {type === 'totalTask' ? 
        <span>{taskCount}</span>
        :
        <span>{`${taskSelectedCount} de ${taskCount}`}</span>
      }
    </div>
  )  
}