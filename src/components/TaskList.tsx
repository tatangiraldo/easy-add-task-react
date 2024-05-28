import { Task } from "./Task"

type ListTaskProps = {
    taskList: string[],
    deleteTask: (index:number) => void
}

export const TaskList = ({taskList, deleteTask}: ListTaskProps) => {
  return (
    <div className="taskList">
       {
        taskList.map( (task, index) => (
            <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
        ))
       } 
    </div>

  )
}