import axios from 'axios';

//Envia al store los temperamentos cargados por la acción cargaTemperaments
export function enviaTemperaments(data){
    return {
        type: "ENVIA_TEMPERAMENTS",
        payload: data
    }
}

//Carga los temperamentos para luego ser mandados al store
export function cargaTemperaments(){
    return function (dispatch){
        axios.get('http://localhost:3001/temperament')
        .then(temperaments => temperaments.data)
        .then(temperaments => dispatch(enviaTemperaments(temperaments)))
        .catch(error => console.log(error));
    }
}

//Cada vez que se crea una raza de perro, guardaCreado la almacena en el store
export function guardaCreado(creado){
    let obj = {
        name: creado.name,
        life_span: creado.life_span,
        weight: creado.weight,
        heigth: creado.heigth,
        image: creado.image,
        id: creado.id
    };

    return {
        type: "GUARDA_CREADO",
        payload: obj
    }
}

//envía los datos al store que son filtrados por nombre
export function envioPorNombre(data){
    return {
        type: "FILTRADO_NOMBRE",
        payload: data
    }
}

//filtra por nombre (busca en el servidor)
export function filtradoNombre(nombre){
    return async function(dispatch){
        let results = await axios.get(`http://localhost:3001/dogs?name=${nombre}`);
        let resultsData = results.data;
        dispatch(envioPorNombre(resultsData));
    }
}

//envía los datos al store que son filtrados por temperamento
export function envioPorTemperamento(data, temperamento){
    /* console.log(temper) */
    /* return {
        type: "FILTRADO_TEMPERAMENTO",
        temperamento,
        payload: data
    } */
}

//filtra por temperamento (busca en el servidor)
export function filtradoTemperamento(temperamento){
    const temp = temperamento;
    console.log(temp)
    return async function(dispatch){
        let results = await axios.get('http://localhost:3001/temperament');
        let resultsData = results.data;
        console.log(temp)
        dispatch(envioPorTemperamento(resultsData, temperamento));
    }
}