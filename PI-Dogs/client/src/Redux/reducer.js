const initial_state = {
    creados: [],
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

        default:
            return state;
    }
}