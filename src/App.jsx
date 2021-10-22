
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, {useState} from 'react';

function App() {
    //This below line creates a task and intializes a default state
      //tasks is the variable we use
      //setTasks is a function that can be used to alter the state of tasks variable
      //on the RHS we useState and initialize some default values
      const [tasks, setTasks] = useState([
          {id:1, text: 'Task 1'},{id:2, text:'Task 2'}
      ])
    //Delete Task
    const deleteTask = (id) => {
      console.log(tasks, id)
      setTasks(tasks.filter((task)=> (
        task.id !== id
      )))
    }
  return (
    <div className="container">
      {/* Calling a Child Component */}
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
