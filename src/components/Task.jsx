import React from 'react'
//Library for some icons
import {FaTimes} from 'react-icons/fa'

const task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => {props.onToggle(props.task.id)}}>
            <h3>{props.task.text}
                {/* passing the id of clicked item back to parent by sending it i the function args */}
                <FaTimes 
                    onClick={() => {props.onDelete(props.task.id)}}
                    
                /> 
            </h3>
        </div>
    )
}

export default task
