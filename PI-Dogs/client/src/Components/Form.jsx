import React, {useState, useEffect} from 'react';
import { cargaTemperaments, guardaCreado} from '../Redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';


function Form({ cargaTemperaments, temperamentsE, creados, guardaCreado }){
    const [nombre, setNombre] = useState("");
    const [alturaMin, setAlturaMin] = useState("");
    const [alturaMax, setAlturaMax] = useState("");
    const [pesoMin, setPesoMin] = useState("");
    const [pesoMax, setPesoMax] = useState("");
    const [añosMin, setAñosMin] = useState("");
    const [añosMax, setAñosMax] = useState("");
    const [image, setImagen] = useState("");
    const [selec, setSelec] = useState([]);

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
            temperaments: selec
        }
        const crear = await axios.post('http://localhost:3001/dog', datos)
        const creado = crear.data;
        guardaCreado(creado);
    }

    function borrar(key){
        
        let actualizado = selec.filter(x => selec[key] !== x);
        setSelec(actualizado);
    }
    
    return (
        <form onSubmit={(e) => enviar(e,nombre, añosMin, añosMax, pesoMin, pesoMax, alturaMin, alturaMax, image, selec)}>
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
                <input type="text" value={image} placeholder="url" onChange={(e) => modificaImagen(e)}/>
            </div>
            <div>
                <label>Temperamentos:</label>
                {!temperamentsE?null:
                    <select onChange={cambiaSelect}>
                        <option key={-1} value={""}></option>
                        {
                            temperamentsE.map((item, i) => (
                                <option key={i} value={item}>{item}</option>
                            ))
                        }
                    </select>
                }
            </div>
            <div>
                {
                    selec.map((item, i) => (
                        <div key={i}>
                            {item}<button onClick={(key) => borrar(i)}>x</button>
                        </div>
                    ))
                }
            </div>
            
            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}

function mapStateToProps(state){
    return {
        temperamentsE: state.temperamentsE,
        creados: state.creados
    };
}

function mapDispatchToProps(dispatch){
    return {
        cargaTemperaments: function(){
            dispatch(cargaTemperaments());
        },
        guardaCreado: function(creado){
            dispatch(guardaCreado(creado))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);