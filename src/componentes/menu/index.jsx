import "./style.css"
import { Link } from 'react-router-dom';

function menu(){
    return(
        <nav className="c-menu">
            <Link to="/">Listar</Link>
        </nav>
    )
}

export default menu