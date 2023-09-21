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
            titulo:"Francês Básico", 
            sinopse: "Conteudos estudados: Comprimentos; Alfabeto; Números e apresentação pessoal. Gostos e preferências; Contatos; Descrição física e psicológica; a Familia e os Amigos. As horas e a data; O clima; As atividades cotidianas; A rotina: habitos e frequências.", 
            imagem:"/francesBasico.png"
        },
        {
            id:2,
            titulo:"Certificado da FECINAVI", 
            sinopse: "2021", 
            imagem:"/sudesteAsiatico.png"
        },
        {
            id:3,
            titulo:"Coreano Nível 1", 
            sinopse: "2021", 
            imagem:"/coreanoNivel1.png"
        },
        {
            id:4,
            titulo:"Coreano Nível 3", 
            sinopse: "2022", 
            imagem:"/coreanoNivel3.png"
        },
        {
            id:5,
            titulo:"Concurso sobre a história da Coreia", 
            sinopse: "2023", 
            imagem:"/concursoCoreano.png"
        },
        {
            id:6,
            titulo:"📚", 
            sinopse: "No momento estou fazendo um curso de Inglês Básico II e mais dois projetos; OBI 2023 e Ritmos da Vida.", 
            imagem:"/study.jpg"
        },
        {
            id:7,
            titulo:"🐱👍", 
            sinopse: "", 
            imagem:"/gato.jpg"
        },
        {
            id:8,
            titulo:"🐶👍", 
            sinopse: "", 
            imagem:"/cachorro.jpg"
        },
        {
            id:9,
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
        <main className="content-main">
        <div className="minhaApresentacao">
            <div>
                <img className="myPhoto" src="/Ellyn.jpg" alt=""/>
            </div>
            <div>
            <h1 className="myTitle">Olá!</h1>
            <p className="myText">Meu nome é Evelyn, tenho 18 anos, Moro na cidade de Naviraí, estado de Mato Grosso do Sul. No momento ainda estudo o ensino médio no IFMS campus Naviraí. Este é meu portifólio e abaixo estão alguns dos meus certificados de cursos, projetos e concurso que fiz + fotos aleatórias.</p>
            </div>
            </div>
            <div className="pesquisa">
                <p>Buscar Projeto:</p>
                <input className='barraPesquisa' type='text' onChange={mudaTexto}/>
            {/* <div>
                <p className='texto_digitado'>pesquisa: {texto}</p>
            </div> */}
            </div>
        {projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetosTypes)=><Projetos key={projeto.id} titulo={projeto.titulo} sinopse={projeto.sinopse} imagem={projeto.imagem}/>)}
        </main>
        </>
    )
}

export default Main