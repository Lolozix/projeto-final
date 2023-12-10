import { Link } from "react-router-dom";

export default function Menu() {
    return (

        <div>


            <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                <div class="bg-dark p-4">
                    <p><Link to={'/'}>Início</Link></p>
                    <p><Link to={'/cadastrar'}>Cadastrar</Link></p>
                    <p><Link to={'/destaque'}>Destaques</Link></p>
                </div>
            </div>


            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>


        </div>
        
    );
} 
