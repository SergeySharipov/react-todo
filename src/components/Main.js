
import React from "react"

export default function Main() {
    const [tasks, tasksUpdate] = React.useState([])
    const [newTask, newTasksUpdate] = React.useState("")

    function addTask() {
        if (newTask !== "") {
            tasksUpdate(tasks => [...tasks, <li key={tasks.length}>{newTask}</li>])
            console.log(tasks)
        }
    }

    function onNewTaskChange(it) {
        newTasksUpdate(it.nativeEvent.srcElement.value)
        console.log(it.nativeEvent.srcElement.value)
    }

    return (
        <main>
            <input className="inputTask" onChange={onNewTaskChange} placeholder="Task"></input>
            <button className="btnAddTask" onClick={addTask}>Add Task</button>
            <ul>
                {tasks}
            </ul>
        </main>
    )
}