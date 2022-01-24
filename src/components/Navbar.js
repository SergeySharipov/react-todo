import logo from '../logo.svg'

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt=''></img>
            <h1>ToDo List</h1>
        </nav>
    )
}