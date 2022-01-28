import React from "react"
import iconRemove from "../images/remove.svg"

export default function Task(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div className="d-flex align-items-center">
                <input className="form-check-input me-2" type="checkbox" checked={props.isDone} onChange={props.onTaskCheckboxClick} />
                {props.isDone ? <s>{props.title}</s> : props.title}
            </div>
            <button
                className="delete-btn"
                onClick={props.deleteTask}
            >
                <img src={iconRemove} alt="" />
            </button>
        </li>
    )
}