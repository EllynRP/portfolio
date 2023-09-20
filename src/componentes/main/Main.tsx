import {useState} from "react"
import Projetos from "../projetos/Projetos"
import './Main.css'

type ProjetosTypes = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

function Main(){
    const [texto, setTexto] = useState("")
    const projetos:ProjetosTypes[] = [
        {
            id:1,
            titulo:"Ola!", 
            sinopse: "Meu nome é Evelyn, tenho 18 anos. Moro na cidade de Naviraí, Estado de Mato Grosso do Sul. No momento ainda estudo o ensino médio no IFMS campus Naviraí. Abaixo estão alguns cursos e projetos que fiz", 
            imagem:"/Ellyn.jpg"
        },
        {
            id:2,
            titulo:"Francês Básico", 
            sinopse: "2021", 
            imagem:"/francesBasico.png"
        },
        {
            id:3,
            titulo:"Certificado da FECINAVI", 
            sinopse: "2021", 
            imagem:"/sudesteAsiatico.png"
        },
        {
            id:4,
            titulo:"Coreano Nível 1", 
            sinopse: "2021", 
            imagem:"/coreanoNivel1.png"
        },
        {
            id:5,
            titulo:"Coreano Nível 3", 
            sinopse: "2022", 
            imagem:"/coreanoNivel3.png"
        },
        {
            id:6,
            titulo:"Concurso sobre a história da Coreia", 
            sinopse: "2023", 
            imagem:"/concursoCoreano.png"
        },
        {
            id:7,
            titulo:"📚", 
            sinopse: "No momento estou fazendo o curso de Inglês Básico II mais dois projetos; OBI 2023 e Ritmos da Vida.", 
            imagem:"/study.jpg"
        },
        {
            id:8,
            titulo:"🐱👍", 
            sinopse: "", 
            imagem:"/gato.jpg"
        },
        {
            id:9,
            titulo:"🐶👍", 
            sinopse: "", 
            imagem:"/cachorro.jpg"
        },
        {
            id:10,
            titulo:"Obrigado pela atenção", 
            sinopse: "", 
            imagem:"/tere.jpg"
        }

    ];

    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
        <div className="pesquisa">
            <p>Buscar Projeto:</p>
            <input className='barraPesquisa' type='text' onChange={mudaTexto}/>
            {/* <div>
                <p className='texto_digitado'>pesquisa: {texto}</p>
            </div> */}
        </div>
        <main className="content-main">
        {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetosTypes)=><Projetos key={projeto.id} titulo={projeto.titulo} sinopse={projeto.sinopse} imagem={projeto.imagem}/>)}
        </main>
        </>
    )
}

export default Main