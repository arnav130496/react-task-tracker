import React, {useState} from 'react'

//you can input the specific fields from props by deserealizing them in the method parameters itself
//it can be AddTask = (props) => ... OR AddTask = ({specific_prop}) => ...
const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    //on submit of form below function is triggered
    const onSubmit = (e) => {
        e.preventDefault();
        //basic validations
        if(!text || !day){
            alert('Please add task and day')
            return
        }
        //calling the onAdd method to add to our state for existing tasks
        onAdd({text, day, reminder})
        //clearing all prompts once submitted
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label className='form-control label form-control-check label'>Task</label>
                <input className='form-control input form-control-check input' type='text' placeholder='Add-Task' value={text} onChange={(e) => setText(e.target.value)}/> 
            </div>
            <div className='form-control'>
                <label className='form-control label form-control-check label'>Day & Time</label>
                <input className='form-control input form-control-check input' type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <label className='form-control label'>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form >
    )
}

export default AddTask
