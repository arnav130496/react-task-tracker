import Task from "./Task";

const Tasks = (props) => {
    let tasks = props.tasks;
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={props.onDelete}></Task>
            ))}
        </>
    )
}

export default Tasks
