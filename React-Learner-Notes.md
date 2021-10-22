# Notes

### Props 
    When we want to pass something from a parent component to a child component we can use props
    Ex:  
    PARENT
    <div className="container">
      <Header title='Hello'/> ---> passing title to child component Header
    </div>
    
    CHILD
    const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker</h1>
            <h4>{props.title}</h4> --> Using props to access data sent by parent
        </header>
        )
    }

### useState
    When we want to persist something statefully and alter state based on different actions we use this.
    Ex:
    const Tasks = () => {
        //This below line creates a task and intializes a default state
            //tasks is the variable we use
            //setTasks is a function that can be used to alter the state of tasks variable
            //on the RHS we useState and initialize some default values
        const [tasks, setTasks] = useState([
            {id:1, text: 'Task 1'},{id:2, text:'Task 2'}
        ])

        return (
            <>
                {tasks.map((task) => (
                    <h3 key={task.id}>{task.text}</h3>
                ))}
            </>
        )
    }

### creating a prod build & steps to run and use prod build
    npm run build -> creates an optimized prod build in the build folder with minified versions of the app
    npm i -g serve -> once built if you want to run the prod build locally you need to install the 'serve' package globally
    serve -s build -p 8000 -> This command then deploys the prod from build folder on port 8000


### useEffect
    useEffect hook is used when altering dom, making api fetches etc. 
    Since render is quick to produce effects, to manage the lifecycle we must use useEffect
    Ex:
        useEffect(()=>{
            const getTasks = async () => {
                const dataFromServer = await fetchTasks()
                setTasks(dataFromServer)
            }
            getTasks()
            //passing an array incase you want a flag deciding if this method runs, we dont so empty
        }, [])

        const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()

            console.log(data)
            return data
        }

### Using fetch to make API calls (done using async/await)
    Ex: 
        1. const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()

            console.log(data)
            return data
        }

        2. const addTask = async (task) => {
            const res = await fetch(`http://localhost:5000/tasks/`, {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                
                body: JSON.stringify(task)
            })

            const data = await res.json()
            setTasks([...tasks, data])
        }

### npm-reactor-dom for making page switches/routing
    npm i react-router-dom -> to install the package