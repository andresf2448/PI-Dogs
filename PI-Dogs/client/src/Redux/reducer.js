const initial_state = {
    temperaments: undefined
}

export default (state = initial_state, action) => {
    switch(action.type){
        case "ENVIA_TEMPERAMENTS":
            return {
                temperaments: action.payload.map(x => x.temperament)
            };

        default:
            return state;
    }
}