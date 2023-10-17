import "./Contato.css"
import peopleContato from '/peopleContato.png';
import emailContato from '/emailContato.png';
import phoneContato from '/phoneContato.png';


function Contato(){
    return(
        <div className='content-contato'>
          <div className="content-contato2">
            <h1 className="titleContato">Contate-me</h1>
            <div className="content-contato3">
              <div className="formularioDescricao">
                <div className="descricaoFormulario">
                  <img src={peopleContato} alt="" />
                  <div>
                    <h3>Portofolio</h3>
                    <p>Saiba mais sobre mim</p>
                  </div>
                </div>
                <div className="descricaoFormulario">
                  <img src={emailContato} alt="" />
                  <div>
                    <h3>Email</h3>
                    <p>Evelyn.ramiro2005@gmail.com</p>
                  </div>
                </div>
                <div  className="descricaoFormulario">
                  <img src={phoneContato} alt="" />
                  <div>
                    <h3>Telefone</h3>
                    <p>+55 67 90000-0000</p>
                  </div>
                </div>
              </div>
              <div className="formularioContato">
              dv TF part 2 
              </div>
            </div>
          </div>
        </div>

    )
}

export default Contato