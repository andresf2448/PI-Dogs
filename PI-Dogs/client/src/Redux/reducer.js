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

        case "TEMPERAMENTO_FILTRADO":
            return {
                ...state,
                filtrados: action.payload
            }

        case "ORDENADO_AZ":
            let resultsAZ = action.payload.sort(function(a, b){
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });

            return {
                ...state,
                filtrados: resultsAZ
            }

        case "ORDENADO_ZA":
            let resultsZA = action.payload.sort(function(a, b){
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            });

            return {
                ...state,
                filtrados: resultsZA
            };

        case "ORDENA_ASC":
            let resultASC = action.payload.sort(function(a, b){
                if (a.weight[0] > b.weight[0]) return 1;
                if (a.weight[0] < b.weight[0]) return -1;
                return 0;
            });

            return {
                ...state,
                filtrados: resultASC
            };

        case "ORDENA_DESC":
            let resultDESC = action.payload.sort(function(a, b){
                if (a.weight[0] > b.weight[0]) return -1;
                if (a.weight[0] < b.weight[0]) return 1;
                return 0;
            });

            return {
                ...state,
                filtrados: resultDESC
            };

        case "BUSCAR_CREADOS":
            return {
                ...state,
                filtrados: action.payload
            }

        default:
            return state;
    }
}