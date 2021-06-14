import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { filtradoNombre } from '../Redux/actions';

function PrincipalRoute({filtradoNombre}){
    const [nombre, setNombre] = useState('');

    function cambiaNombre(e){
        setNombre(e.target.value);
    }

    function buscarNombre(nombre){
        filtradoNombre(nombre);
    }

    return (
        <nav>
            <span><input type="text" value={nombre} onChange={cambiaNombre} placeholder="nombre" /><button onClick={() => buscarNombre(nombre)}><b>Buscar</b></button></span>
            <Link to="/">
                <button>Página principal</button>
            </Link>
            <Link to="/principal/form">
                <button>Crear raza de perro</button>
            </Link>
        </nav>
    )
}

function mapDispatchToProps(dispatch){
    return {
        filtradoNombre: function(nombre){
            return dispatch(filtradoNombre(nombre))
        }
    }
}

export default connect(null, mapDispatchToProps)(PrincipalRoute);