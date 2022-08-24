import { Itask } from "../Content/Content";
import { Counter } from "../Counter/Counter"
import { Empty } from "../Empty/Empty";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./Tasks.module.css";

interface ITasksProps{
  tasks: Itask[];
  onUpdateTasks: (tasks: Itask[]) => void;
}

export function Tasks({tasks, onUpdateTasks}: ITasksProps){

  const taskCount = tasks.length;
  const taskSelectedCount = tasks.filter(task => task.isSelected).length;

  return(
    <div className={styles.tasksContainer}>
      <div className={styles.info}>
        <Counter  
          taskCount={taskCount} 
          description="Tarefas Criadas"
          type="totalTask"
        />
        <Counter 
          taskCount={taskCount} 
          taskSelectedCount={taskSelectedCount} 
          description="Concluídas" 
          type="doneTask"
        />
      </div>

      <div className={tasks.length <= 0 ? styles.tasksContainerWithBorder : ''}>
        {tasks.length > 0 ?
          tasks.map(task => 
            <TaskItem 
              key={task.id}
              tasks={tasks}
              task={task}
              onUpdateTasks={onUpdateTasks}
            />)
          :
          <Empty />
        }
      </div>
    </div>
  )  
}