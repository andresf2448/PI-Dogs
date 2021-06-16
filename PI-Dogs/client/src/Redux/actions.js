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
        height: creado.heigth,
        image: creado.image,
        id: creado.id,
        temperaments: creado.temperaments.join(", ")
    };

    return {
        type: "GUARDA_CREADO",
        payload: obj
    }
}

//envía los datos al store que son filtrados por nombre o por todas las razas
export function envioPorNombreRaza(data){
    return {
        type: "FILTRADO_NOMBRE_RAZA",
        payload: data
    }
}

//filtra por nombre (busca en el servidor)
export function filtradoNombre(nombre){
    return async function(dispatch){
        let results = await axios.get(`http://localhost:3001/dogs?name=${nombre}`);
        let resultsData = results.data;
        dispatch(envioPorNombreRaza(resultsData));
    }
}

//envía los datos al store que son filtrados por temperamento
export function temperamentoFiltrado(data){
    return {
        type: "TEMPERAMENTO_FILTRADO",
        payload: data
    }
}

//filtra por temperamento (busca en el servidor)
export function filtradoTemperamento(temperamento){
    return async function(dispatch){
        let results = await axios.get(`http://localhost:3001/intermediate/${temperamento}`);
        let resultsData = results.data;
        dispatch(temperamentoFiltrado(resultsData));
    }
}

//Trae todas las razas de perros creadas y existentes desde el servidor
export function razas(){
    return async function(dispatch){
        let results = await axios.get('http://localhost:3001/dogs');
        let resultsData = results.data;
        dispatch(envioPorNombreRaza(resultsData));
    }
}

//Trae todas las razas de perros creadas y que se encuentran guardadas en la base de datos
export function buscarCreados(data){
    return {
        type: "BUSCAR_CREADOS",
        payload: data
    }
}

//despacha una acción con la cual el reducer ordena los datos de ordenamiento_AZ
export function ordenadoAZ(data){
    return {
        type: "ORDENADO_AZ",
        payload: data
    }
}

//Ordenamiento por nombre de raza de la A a la Z
export function ordenamiento_AZ(){
    console.log("estamos en orden AZ") 
    return async function(dispatch){
        const results = await axios.get('http://localhost:3001/dogs');
        const resultsData = results.data;
        dispatch(ordenadoAZ(resultsData));
    }
}

//despacha una acción con la cual el reducer ordena los datos de ordenamiento_ZA
export function ordenadoZA(data){
    return {
        type: "ORDENADO_ZA",
        payload: data
    }
}

//Ordenamiento por nombre de raza de la Z a la A
export function ordenamiento_ZA(){
    console.log("estamos en orden ZA")
    return async function(dispatch){
        const results = await axios.get('http://localhost:3001/dogs');
        const resultsData = results.data;
        dispatch(ordenadoZA(resultsData));
    }
}

//despacha una acción con la cual el reducer ordena los datos de ordenamiento_Peso_Asc
export function ordenaAsc(data){
    return {
        type: "ORDENA_ASC",
        payload: data
    }
}

//Ordenamiento peso Asc
export function ordenamiento_Peso_Asc(){
    console.log("Peso ASC")
    return async function(dispatch){
        const results = await axios.get('http://localhost:3001/dogs');
        const resultsData = results.data;
        dispatch(ordenaAsc(resultsData));
    }
}

//despacha una acción con la cual el reducer ordena los datos de ordenamiento_Peso_Desc
export function ordenaDesc(data){
    return {
        type: "ORDENA_DESC",
        payload: data
    }
}

//Ordenamiento peso Desc
export function ordenamiento_Peso_Desc(){
    console.log("Peso DESC")
    return async function(dispatch){
        const results = await axios.get('http://localhost:3001/dogs');
        const resultsData = results.data;
        dispatch(ordenaDesc(resultsData));
    }
}