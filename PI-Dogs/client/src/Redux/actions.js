import axios from 'axios';

export function enviaTemperaments(data){
    return {
        type: "ENVIA_TEMPERAMENTS",
        payload: data
    }
}

export function cargaTemperaments(){
    return function (dispatch){
        axios.get('http://localhost:3001/temperament')
        .then(temperaments => temperaments.data)
        .then(temperaments => dispatch(enviaTemperaments(temperaments)))
        .catch(error => console.log(error));
    }
}

/* export function enviaDatos(datos){
    console.log("=============",datos.name,datos.life_span,datos.weight,datos.height,datos.imagen,datos.selec)
    return function(dispatch){
        console.log(datos);
        axios.post('http://localhost:3001/dog', datos)
        .then(d => d.data)
        .then(d => console.log(d))
        .catch(err => console.log(err));
    }
} */