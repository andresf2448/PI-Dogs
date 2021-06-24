import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { guardaCreado } from '../Redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import '../Css/Form.css';

function Form({ temperamentsE, guardaCreado, idG }){
    const [nombre, setNombre] = useState("");
    const [alturaMin, setAlturaMin] = useState("");
    const [alturaMax, setAlturaMax] = useState("");
    const [pesoMin, setPesoMin] = useState("");
    const [pesoMax, setPesoMax] = useState("");
    const [añosMin, setAñosMin] = useState("");
    const [añosMax, setAñosMax] = useState("");
    const [image, setImagen] = useState("");
    const [selec, setSelec] = useState([]);

    function modificaNombre(e){
        setNombre(e.target.value);
    }
    
    function modificaAlturaMin(e){
        setAlturaMin(e.target.value);
    }
    
    function modificaAlturaMax(e){
        setAlturaMax(e.target.value);
    }
    
    function modificaPesoMin(e){
        setPesoMin(e.target.value);
    }
    
    function modificaPesoMax(e){
        setPesoMax(e.target.value);
    }
    
    function modificaAñosMin(e){
        setAñosMin(e.target.value);
    }
    
    function modificaAñosMax(e){
        setAñosMax(e.target.value);
    }
    
    function modificaImagen(e){
        setImagen(e.target.value);
    }

    function cambiaSelect(e){
        setSelec([...selec, e.target.value])
    }

    async function enviar(e, name, añosMin, añosMax, pesoMin, pesoMax, alturaMin, alturaMax, image, selec){
        e.preventDefault();
        let life_span = `${añosMin} - ` + `${añosMax} ` + `years`;
        let weight = `${pesoMin} - ` + `${pesoMax}`;
        let height = `${alturaMin} - ` + `${alturaMax}`;
        let datos = {
            name,
            life_span,
            weight,
            height,
            image,
            temperaments: selec,
        };
        
        const crear = await axios.post('http://localhost:3001/dog', datos)
        let datosBG = {
            name,
            life_span,
            weight,
            height,
            image,
            temperaments: selec,
            id:idG
        };
        guardaCreado(datosBG);
    }

    function borrar(key){
        
        let actualizado = selec.filter(x => selec[key] !== x);
        setSelec(actualizado);
    }
    
    return (
        <Fragment>
            <Link to='/principal'>
                <button className="posButt">Regresar</button>            
            </Link>
            <form onSubmit={(e) => enviar(e,nombre, añosMin, añosMax, pesoMin, pesoMax, alturaMin, alturaMax, image, selec)} className="form">
            <div className="contenedores" className="style">
                <label className="headers">Nombre:</label> <br />
                <input type="text" placeholder="nombre" value={nombre} onChange={(e) => modificaNombre(e)} className="styleM" required/>
            </div>
            <div className="contenedores">
                <label className="headers">Altura:</label> <br />
                <input type="number" min="0" placeholder="min" value={alturaMin} onChange={(e) => modificaAlturaMin(e)} className="itemsp"/>
                <input type="number" min="0" placeholder="max" value={alturaMax} onChange={(e) => modificaAlturaMax(e)} className="itemsp"/>
            </div>
            <div className="contenedores">
                <label className="headers">Peso:</label> <br />
                <input type="number" min="0" placeholder="min" value={pesoMin} onChange={(e) => modificaPesoMin(e)} className="itemsp"/>
                <input type="number" min="0" placeholder="max" value={pesoMax} onChange={(e) => modificaPesoMax(e)} className="itemsp"/>
            </div>
            <div className="contenedores">
                <label className="headers">Años de vida:</label> <br />
                <input type="number" min="0" value={añosMin} placeholder="min" onChange={(e) => modificaAñosMin(e)} className="itemsp"/>
                <input type="number" min="0" value={añosMax} placeholder="max" onChange={(e) => modificaAñosMax(e)} className="itemsp"/>
            </div>
            <div className="contenedores" className="style">
                <label className="headers">Imagen url:</label> <br />
                <input type="text" value={image} placeholder="url" onChange={(e) => modificaImagen(e)} className="styleM"/>
            </div>
            <div className="contenedores">
                <label className="headers">Temperamentos:</label> <br />
                {!temperamentsE?null:
                    <select onChange={cambiaSelect} className="selecStyle">
                        <option key={-1} value={""} className="selecStyle"></option>
                        {
                            temperamentsE.map((item, i) => (
                                <option key={i} value={item}>{item}</option>
                            ))
                        }
                    </select>
                }
            </div>
            <div className="contenedores">
                {
                    selec.map((item, i) => (
                        <div key={i}>
                            <span className="headers">{item}</span><button onClick={(key) => borrar(i)}>x</button>
                        </div>
                    ))
                }
            </div>
            <div className="contenedores">
                <input type="submit" value="Crear" className="butt"/>
            </div>
            </form>
        </Fragment>
    )
}

function mapStateToProps(state){
    return {
        temperamentsE: state.temperamentsE,
        idG: state.idG
    };
}

function mapDispatchToProps(dispatch){
    return {
        guardaCreado: function(creado){
            dispatch(guardaCreado(creado))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);