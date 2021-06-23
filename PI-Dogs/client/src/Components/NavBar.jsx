import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import '../Css/NavBar.css'
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
        <nav className="nav">
            <label className="label">Henry Dogs</label>
            <span className="subNav">
                <span><input type="text" value={nombre} onChange={cambiaNombre} placeholder="nombre" className="styleM"/><button onClick={() => buscarNombre(nombre)} className="butto"><BsSearch/></button></span>
                <Link to="/principal/form">
                    <button className="buttCreate">Crear raza de perro</button>
                </Link>
                <Link to="/">
                    <button className="buttCreate">Página principal</button>
                </Link>
                {/* <FaLinkedin size={70}/> */}
            </span>
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