import React from "react"
import { Link } from "react-router-dom";



export default function Card({cortes}){
   const lolo = cortes.url.slice(17)
    return(

            <div class="list-cortes">
                 
                 <iframe 
                        class="video"
                        width="600"
                        height="400"
                        src={`https://www.youtube.com/embed/${lolo}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                  </iframe>
                <h1>{cortes.titulo}</h1>  
                 <p>{cortes.descricao}</p>
                 <p>{cortes.canal}</p>
                 <p>{cortes.data}</p>
                 <p>{cortes.playlist}</p>
                  <Link to={`/detalhe/${cortes.id}`}><button class="info">Mais Informações</button></Link>

             </div>   



    )

}