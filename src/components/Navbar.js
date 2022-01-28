import logo from '../images/logo.svg'

export default function Navbar() {
    return (
        <nav>
            <img className='nav-img' src={logo} alt=''></img>
            <h1>ToDo List</h1>
        </nav>
    )
}