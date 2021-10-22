import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import Button from './Button'

//Using props here (Parent component can choose to pass values)
const Header = (props) => {
    const location = useLocation()
    //props are usally an object and hence need to be unpacked
    return (
        <header className='header'>
            
            <h1>{props.title}</h1>
            {location.pathname === '/' && (<Button color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} onClick={props.toggleAddTask}/>)}
            
        </header>
    )
}

//Default values if parent does not provide props
Header.defaultProps = {
    title:'Task Tracker',
    toggleAddTask: false
}

//Props types so that it adheres to the definitions
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
