import { Link } from "react-router-dom";



export default function Card({cortes}){
 
    return(



            <div className="list-cortes">
                 <p>{cortes.titulo}</p>
                 <p>{cortes.descricao}</p>
                 <p>{cortes.canal}</p>
                 <p>{cortes.playlist}</p>
                 <p>{cortes.data}</p>

                 <iframe 
                        width="600"
                        height="400"
                        src={`https://www.youtube.com/embed/${cortes.link.slice(17)}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                  </iframe>
                  <Link to={`/detalhe/${cortes.id}`}><button>Mais Informações</button></Link>

             </div>   



    )

}