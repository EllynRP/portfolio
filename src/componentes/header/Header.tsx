import './Header.css'
function Header(){
    return(
        <header>
            <div className='logoTitle'>
                Evelyn Ramiro Pereira
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="http://localhost:5173/">Pagina inicial</a>
                    </li>
                    <li>
                        <a href="#">Status</a>
                    </li>
                    <li>
                        <a href="#">Currículo</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header