import "./style.css"
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <nav className="c-menu">
            <Link to="/">Listar</Link>
            <Link to="/aleatorio">Aleatorio</Link>
            <Link to="/detalle">Detalle</Link>
            <Link to="/Favoritos">Favoritos</Link>
            <Link to="/original">Original</Link>
            <Link to="/usuario">Usuario</Link>
        </nav>
    )
}

export default Menu