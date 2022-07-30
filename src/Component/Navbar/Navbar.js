import './Navbar.css'
import {Button} from 'antd'

const Navbar = () => {
    return(
        <div className="navbar">
            <div>
                <h2>ATools<span>.</span></h2>
            </div>
            <div>
                <Button>Start free trail</Button>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default Navbar;