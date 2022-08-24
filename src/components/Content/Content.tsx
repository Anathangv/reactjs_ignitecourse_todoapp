import { useState } from "react";
import { NewTask } from "../NewTask/NewTask";
import { Tasks } from "../Tasks/Tasks";

export interface Itask{
  id: number,
  description: string,
  isSelected: boolean,
}

export function Content(){

  const [tasks, setTasks] = useState<Itask[]>([]);

  function updateTasks(tasksUpdated: Itask[]){
    setTasks(tasksUpdated)
  }

  return (
    <div >
      <NewTask tasks={tasks} onUpdateTasks={updateTasks}/>
      <Tasks tasks={tasks} onUpdateTasks={updateTasks}/>
    </div>
  )
}
