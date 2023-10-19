import "./Contato.css"
import {useState} from "react"
import peopleContato from '/peopleContato.png';
import emailContato from '/emailContato.png';
import phoneContato from '/phoneContato.png';


function Contato(){
  const [nome, setNome] = useState("")  
  const [email, setEmail] = useState("")
  const [numero, setNumero] = useState("")
  const [mensagem, setMensagem] = useState("")
  function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setNome(e.target.value)
  }
  function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  function mudaNumero(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setNumero(e.target.value)
  }
  function mudaMensagem(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setMensagem(e.target.value)
  }
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
              <form>
                <label>
                  <p>Nome completo:{nome}</p>
                  <input className="inputForm" type="text"  onChange={mudaNome}/>
                </label>
                <label>
                  <p>Email:{email}</p>
                  <input className="inputForm" type="email"  onChange={mudaEmail}/>
                </label>
                <label>
                  <p>Numero de Telefone:{numero}</p>
                  <input className="inputForm" type="text"  onChange={mudaNumero}/>
                </label>
                <label>
                  <p>Mensagem:{mensagem}</p>
                  <input className="inputForm" type="text"  onChange={mudaMensagem} />
                </label>
                <input className="botaoEnviar" type="submit" />
              </form>
              </div>
            </div>
          </div>
        </div>

    )

    
}

export default Contato