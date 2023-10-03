import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <header>
            <div className='logoTitle'>
                Evelyn Ramiro Pereira
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li>
                        <Link to="/status">Status</Link>
                    </li>
                    <li>
                        <Link to="/curriculo">Currículo</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header