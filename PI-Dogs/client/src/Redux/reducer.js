const initial_state = {
    creados: [],
    filtrados: [],
    temperamentsE: undefined
}

export default (state = initial_state, action) => {
    switch(action.type){
        case "ENVIA_TEMPERAMENTS":
            return {
                ...state,
                temperamentsE: action.payload.map(x => x.temperament)
            };

        case "GUARDA_CREADO":
            return {
                ...state,
                creados: [...state.creados, action.payload]
            }

        case "FILTRADO_NOMBRE_RAZA":
            return {
                ...state,
                filtrados: action.payload
            }

        /* case "FILTRADO_TEMPERAMENTO":
            console.log(action.temperamento) */

        
        default:
            return state;
    }
}