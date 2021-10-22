
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, {useState} from 'react';
import AddTask from "./components/AddTask";

function App() {
    //This below line creates a task and intializes a default state
      //tasks is the variable we use
      //setTasks is a function that can be used to alter the state of tasks variable
      //on the RHS we useState and initialize some default values
      const [tasks, setTasks] = useState([
          {id:1, text: 'Task 1', reminder: false },{id:2, text:'Task 2', reminder:false}
      ])

    //Add Task
    const addTask = (task) => {
      console.log(task);
      const id =  tasks.length +1;
      const newTask = {id, ...task} 
      setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask = (id) => {
      // console.log(tasks, id)
      setTasks(tasks.filter((task)=> (
        task.id !== id
      )))
    }

    //Toggle reminder
    const toggleReminder = (id) => {
      console.log('Double click', id);
      // the '...' known as the spread operator is used to retain other objects in the 'task' obj and after
      // using the ',' we are changing only a specific attribute to the opp of existing reminder value
      setTasks(tasks.map((task) => (
        task.id === id ? {...task, reminder:!task.reminder} : task
      )))
    }
  return (
    <div className="container">
      {/* Calling a Child Component */}
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;
