import { useParams } from "react-router-dom";
import CardDEtalhe from "../Componentes/CardDetalhe";
import Menu from "../Componentes/Menu"

export default function Detalhe() {

        const { id } = useParams();
        const lista = JSON.parse(localStorage.getItem("Lista"));
        
        const mostraVideo = lista.filter((cortes)=>{
            if(cortes.id == id){
                return cortes;
            }
                return null;

    }
) 
        
        console.log(mostraVideo[0]);
        
            return(
                <div>
                    <Menu/>
                        <CardDEtalhe cortes ={mostraVideo[0]}/>
                </div>
    );  
}
