import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: []
}

// reducer recibe dos parametros, el state que seria igual al initialState y su respectiva action

// Y su switch recibe por param el action.type

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                // Siempre hacer una copia con spread operator
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };

            // Filtramos 
            case REMOVE_FAV:
                const updatedFavorites = state.myFavorites.filter((character) => character.id !== action.payload);
                
                return {
                    ...state,
                    myFavorites: updatedFavorites
                };

                default: 
                return {
                    ...state
                }
            
    }
}



export default reducer