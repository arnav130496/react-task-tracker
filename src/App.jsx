
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, {useState, useEffect} from 'react';
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
    //This below line creates a task and intializes a default state
      //tasks is the variable we use
      //setTasks is a function that can be used to alter the state of tasks variable
      //on the RHS we useState and initialize some default values
      const [tasks, setTasks] = useState([])

    useEffect(()=>{
      const getTasks = async () => {
        const dataFromServer = await fetchTasks()
        setTasks(dataFromServer)
      }
      getTasks()
    //passing an array incase you want a flag deciding if this method runs, we dont so empty
    }, [])

    //Fetch all data from API
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      console.log(data)
      return data
    }


    //Fetch single data from API
    const fetchSingleTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
    }

    //Add Task
    const addTask = async (task) => {

      const res = await fetch(`http://localhost:5000/tasks/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        
        body: JSON.stringify(task)
      })

      const data = await res.json()
      setTasks([...tasks, data])
      // console.log(task);
      // const id =  tasks.length +1;
      // const newTask = {id, ...task} 
      // setTasks([...tasks, newTask])

    }

    //Delete Task
    const deleteTask = async (id) => {

      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
        
      })
      // console.log(tasks, id)
      setTasks(tasks.filter((task)=> (
        task.id !== id
      )))
    }

    //Toggle reminder
    const toggleReminder = async (id) => {

      const taskToToggle = await fetchSingleTask(id)
      const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        
        body: JSON.stringify(updatedTask)
      })

      const data = await res.json()
      // the '...' known as the spread operator is used to retain other objects in the 'task' obj and after
      // using the ',' we are changing only a specific attribute to the opp of existing reminder value
      setTasks(tasks.map((task) => (
        task.id === id ? {...task, reminder:data.reminder} : task
      )))
    }
  return (
    <div className="container">
      {/* Calling a Child Component */}
      <Header toggleAddTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;
