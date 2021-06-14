import axios from 'axios';

export function enviaTemperaments(data){
    return {
        type: "ENVIA_TEMPERAMENTS",
        payload: data
    }
}

export function guardaCreado(creado){
    let obj = [
        creado.name,
        creado.life_span,
        creado.weight,
        creado.heigth,
        creado.image,
        creado.id
    ]
    return {
        type: "GUARDA_CREADO",
        payload: obj
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

export function envioPorNombre(data){
    return {
        type: "FILTRADO_NOMBRE",
        payload: data
    }
}

export function filtradoNombre(nombre){
    return async function(dispatch){
        let results = await axios.get(`http://localhost:3001/dogs?name=${nombre}`);
        let resultsData = results.data;
        dispatch(envioPorNombre(resultsData));
    }
}