import { Trash } from 'phosphor-react';
import { Itask } from '../Content/Content';
import styles from './TaskItem.module.css';

interface TaskItemProps{
  tasks: Itask[];
  task: Itask;
  onUpdateTasks: (tasks: Itask[]) => void;
}

export function TaskItem({task, tasks, onUpdateTasks}: TaskItemProps){

  function handleTaskSelected(){
    const UpdatedTasks = tasks.map(t => t.id === task.id ? {...t, isSelected: !t.isSelected} : t);
    onUpdateTasks(UpdatedTasks);
  }

  function handleDeleteTask(idTask: number ){
    const UpdatedTasks = tasks.filter(task => task.id !== idTask);
    onUpdateTasks(UpdatedTasks);
  }

  return (
    <div className={styles.taskItem}>
      <input 
        type="checkbox"
        value={task.id}
        checked={task.isSelected}
        onChange={handleTaskSelected}
      />
      <label htmlFor='checkbox' className={task.isSelected ? styles.taskDone : ''}>
        {task.description}
      </label>
      <Trash weight="light" onClick={() => handleDeleteTask(task.id)} />
    </div>
  )
}