import './Projetos.css'

type ProjetosProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Projetos(props:ProjetosProps){ 
    return(
        <div className="projeto_content">
            <div className='foto_projeto'>
                <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}