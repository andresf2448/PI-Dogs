const initial_state = {
    creados: [],
    filtrados: [],
    temperamentsE: undefined,
    idG: -1
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
                creados: [...state.creados, action.payload],
                idG: state.idG - 1
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

            let resultA = resultASC.slice(2,)

            return {
                ...state,
                filtrados: resultA
            };

        case "ORDENA_DESC":
            let resultDESC = action.payload.sort(function(a, b){
                if (a.weight[0] > b.weight[0]) return -1;
                if (a.weight[0] < b.weight[0]) return 1;
                return 0;
            });

            let result = resultDESC.slice(0, resultDESC.length-2)

            return {
                ...state,
                filtrados: result
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