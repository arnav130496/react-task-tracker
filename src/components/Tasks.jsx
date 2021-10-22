import Task from "./Task";

const Tasks = (props) => {
    let tasks = props.tasks;
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={props.onDelete} onToggle={props.onToggle}></Task>
            ))}
        </>
    )
}

export default Tasks
