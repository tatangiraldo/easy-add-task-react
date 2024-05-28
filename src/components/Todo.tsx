import { useState } from "react"
import { TaskList } from "./TaskList"

export const Todo = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddTask = () => {
        debugger
        if(newTask.trim() === '') return
        setTaskList(prevTasks => [...prevTasks, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index:number) => {
        debugger
        setTaskList(taskList => taskList.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Task List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="New Task"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <TaskList taskList={taskList} deleteTask={handleDeleteTask}  />
        </div>
    )
}