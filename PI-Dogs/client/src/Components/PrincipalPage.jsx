import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function PrincipalPage(){
    return (
        <Fragment>
            <h1>Henry Dogs</h1>
            <div>Imagen principal</div>
            <Link to="/principal">
                <button>Buscar raza de perro</button>
            </Link>                
        </Fragment>
    )
}

export default PrincipalPage;