import './Footer.css'
import Logo1 from '../../assets/instagramLogo.png'
import Logo2 from '../../assets/twitterLogo.png'

function Footer(){
    return( 
        <footer>

            <div className='rodape'>
                <div>
                   <a href="#"><img src={Logo1} alt="" /></a>  
                   <a><img src={Logo2} alt="" /></a>
                </div>
                <div className='rodapeTopicos'>
                    <a className='rodapeTopic' href="#">Pagina inicial</a>
                    <a className='rodapeTopic' href="#">Status</a>
                    <a className='rodapeTopic' href="#">Currículo</a>
                    <a className='rodapeTopic' href="#">Contato</a>
                    <a className='rodapeTopic' href="#">Nosso time</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer

