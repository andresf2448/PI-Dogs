import axios from 'axios';

export function enviaTemperaments(data){
    return {
        type: "ENVIA_TEMPERAMENTS",
        payload: data
    }
}

export function guardaCreado(creado){
    return {
        type: "GUARDA_CREADO",
        payload: creado
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