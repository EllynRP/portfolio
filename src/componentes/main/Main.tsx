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
            sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.", 
            imagem:"/cachorro.jpg"
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
        {/* {filmes.filter((filmes)=>filmes.titulo.toLowerCase().includes(texto.toLowerCase())).map((filmes:FilmesTypes)=><Filme key={filmes.id} titulo={filmes.titulo} sinopse={filmes.sinopse} imagem={filmes.imagem}/>)} */}
        </main>
        </>
    )
}

export default Main