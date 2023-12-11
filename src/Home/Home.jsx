import Card from "../Componentes/Card";
import Menu from '../Componentes/Menu';
import "../styles.css"
export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))
  
  return(
    <div>
      
      <Menu/>



      {lista.map((cortes) => 

        <Card cortes = {cortes}/>

      )}



      </div>
  )

  
 
}