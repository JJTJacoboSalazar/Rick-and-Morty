import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

// reducer recibe dos parametros, el state que seria igual al initialState y su respectiva action

// Y su switch recibe por param el action.type

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                // Siempre hacer una copia con spread operator
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            };

            // Filtramos 
            case REMOVE_FAV:
                const updatedFavorites = state.myFavorites.filter((character) => character.id !== action.payload);
                
                return {
                    ...state,
                    myFavorites: updatedFavorites
                };

                case FILTER:
                    const filteredCharacters = state.allCharacters.filter((character) => character.gender === action.payload);

                return {
                    ...state,
                    myFavorites: filteredCharacters
                }

                case ORDER:
                    let sortedCharacters = [...state.allCharacters];
                    sortedCharacters.sort((a, b) =>
                      action.payload === "A" ? a.id - b.id : b.id - a.id
                    );
                    return {
                      ...state,
                      myFavorites: sortedCharacters,
                    };
              

                default: 
                return {
                    ...state
                }
            
    }
}



export default reducer