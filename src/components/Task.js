import React from "react"
import iconTrash from "../trash.svg"

export default function Task(props) {
    return (
        <div>
            <input type="checkbox" className="checkbox" name="checkbox1" checked={props.isDone} onChange={props.onTaskCheckboxClick} />
            <label htmlFor="checkbox1">{props.title}</label>
            <button
                 className="delete-btn"
                onClick={props.deleteTask}
            >

                <img src={iconTrash} alt="" />
            </button>
        </div>
    )
}