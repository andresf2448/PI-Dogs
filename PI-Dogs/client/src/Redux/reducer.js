const initial_state = {
    temperamentsE: undefined
}

export default (state = initial_state, action) => {
    switch(action.type){
        case "ENVIA_TEMPERAMENTS":
            return {
                temperamentsE: action.payload.map(x => x.temperament)
            };

        default:
            return state;
    }
}