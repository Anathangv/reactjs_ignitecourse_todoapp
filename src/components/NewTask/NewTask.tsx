
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Itask } from '../Content/Content'
import style from './NewTask.module.css'

interface NewTaskProps{
  tasks: Itask[];
  onUpdateTasks: (tasks: Itask[]) => void;
}

export function NewTask({tasks, onUpdateTasks}: NewTaskProps){
  const [taskDescription, setTaskDescription] = useState<string>('');

  function handleNewDescription(event: ChangeEvent<HTMLInputElement>){
    setTaskDescription(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();

    const newTask: Itask = {
      id: tasks.length + 1,
      description: taskDescription,
      isSelected: false,
    }

    onUpdateTasks([...tasks,  newTask]);
    setTaskDescription('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Necessário escrever uma atividade');
  }

  return (
    <form 
      onSubmit={handleCreateNewTask}
      className={style.insertTaskContainner}
    >
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={handleNewDescription}
        required
        onInvalid={handleNewTaskInvalid}
      />
      <button type='submit'>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}