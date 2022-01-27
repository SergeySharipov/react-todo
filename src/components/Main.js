import React from "react"
import { nanoid } from "nanoid"
import Task from "./Task"

export default function Main() {
    const taskStorageKey = "TASKS"

    const [tasks, setTasks] = React.useState(
        () => JSON.parse(localStorage.getItem(taskStorageKey)) || []
    )
    const [newTask, setNewTasks] = React.useState("")

    React.useEffect(() => {
        localStorage.setItem(taskStorageKey, JSON.stringify(tasks))
    }, [tasks])

    function addTask() {
        console.log(tasks)
        //localStorage.setItem(taskStorageKey, event.target.value)
        setTasks(oldTasks => ([
            ...oldTasks,
            {
                id: nanoid(),
                title: newTask,
                isDone: false
            }
        ]))
    }

    function handleChange(event) {
        setNewTasks(event.target.value)
    }

    function onTaskCheckboxClick(currentTaskId) {
        setTasks(oldTasks => {
            const newArray = []
            for (let i = 0; i < oldTasks.length; i++) {
                const oldTask = oldTasks[i]
                if (oldTask.id === currentTaskId) {
                    newArray.unshift({ ...oldTask, isDone: !oldTask.isDone })
                } else {
                    newArray.push(oldTask)
                }
            }
            return newArray
        })
    }

    function deleteTask(taskId) {
        setTasks(oldTasks => oldTasks.filter(task => task.id !== taskId))
    }

    const TaskElements = tasks.map(item => {
        return (
            <Task
                key={item.id}
                title={item.title}
                isDone={item.isDone}
                onTaskCheckboxClick={() => onTaskCheckboxClick(item.id)}
                deleteTask={() => deleteTask(item.id)}

            />
        )
    })

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Task" name="newTask" onChange={handleChange} value={newTask} />
                <button onClick={addTask}>Add task</button>
            </div>
            {TaskElements}


        </main>
    )
}