import PropTypes from 'prop-types'
import Button from './Button'

//Using props here (Parent component can choose to pass values)
const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }

    //props are usally an object and hence need to be unpacked
    console.log(props)
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

//Default values if parent does not provide props
Header.defaultProps = {
    title:'Task Tracker',
}

//Props types so that it adheres to the definitions
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
