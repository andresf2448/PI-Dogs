import React, {useState, useEffect} from 'react';
import { cargaTemperaments } from '../Redux/actions';
import { connect } from 'react-redux';


function Form({ cargaTemperaments, temperaments }){
    const [nombre, setNombre] = useState("");
    const [alturaMin, setAlturaMin] = useState("");
    const [alturaMax, setAlturaMax] = useState("");
    const [pesoMin, setPesoMin] = useState("");
    const [pesoMax, setPesoMax] = useState("");
    const [añosMin, setAñosMin] = useState("");
    const [añosMax, setAñosMax] = useState("");
    const [imagen, setImagen] = useState("");

    useEffect(() => {
       cargaTemperaments();
    }, [])

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

    function enviar(e){
        e.preventDefault();
    }
    
    return (
        <form onSubmit={enviar}>
            <div>
                <label>Nombre Raza:</label>
                <input type="text" value={nombre} placeholder="nombre" onChange={(e) => modificaNombre(e)}/>
            </div>
            <div>
                <label>Altura:</label>
                <input type="number" min="0" placeholder="min" value={alturaMin} onChange={(e) => modificaAlturaMin(e)}/>
                <input type="number" min="0" placeholder="max" value={alturaMax} onChange={(e) => modificaAlturaMax(e)}/>
            </div>
            <div>
                <label>Peso:</label>
                <input type="number" min="0" placeholder="min" value={pesoMin} onChange={(e) => modificaPesoMin(e)}/>
                <input type="number" min="0" placeholder="max" value={pesoMax} onChange={(e) => modificaPesoMax(e)}/>
            </div>
            <div>
                <label>Años de vida:</label>
                <input type="number" min="0" value={añosMin} placeholder="min" onChange={(e) => modificaAñosMin(e)}/>
                <input type="number" min="0" value={añosMax} placeholder="max" onChange={(e) => modificaAñosMax(e)}/>
            </div>
            <div>
                <label>Imagen url:</label>
                <input type="text" value={imagen} placeholder="url" onChange={(e) => modificaImagen(e)}/>
            </div>
            {!temperaments?null:
                <select>
                    {
                        temperaments.map((item, i) => (
                            <option value={i}>{item}</option>
                        ))
                    }
                </select>
            }
            
            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}

function mapStateToProps(state){
    return {
        temperaments: state.temperaments
    };
}

function mapDispatchToProps(dispatch){
    return {
        cargaTemperaments: function(){
            dispatch(cargaTemperaments());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);