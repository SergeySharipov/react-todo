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

    function addTask(event) {
        event.preventDefault()

        setTasks(oldTasks => ([
            {
                id: nanoid(),
                title: newTask,
                isDone: false
            },
            ...oldTasks
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
                    if (!oldTask.isDone) {
                        newArray.push({ ...oldTask, isDone: true })
                    } else {
                        newArray.unshift({ ...oldTask, isDone: false })
                    }
                } else {
                    if (oldTask.isDone) {
                        newArray.push(oldTask)
                    } else {
                        newArray.unshift(oldTask)
                    }
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
        <main className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">

                    <div className="card">
                        <div className="card-body p-5">

                            <form className="d-flex mb-4">
                                <input type="text" className="form-control form-control-lg"
                                    placeholder="What do you need to do today?" name="newTask" onChange={handleChange} value={newTask} />

                                <button onClick={addTask} className="btn btn-primary btn-lg ms-2">Add</button>
                            </form>

                            <h6 className="mb-3">Just do it!</h6>

                            {TaskElements.length !== 0 ?
                                <ul className="list-group mb-0">
                                    {TaskElements}
                                </ul>
                                :
                                "Nothing for today..."
                            }

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}