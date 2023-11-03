import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions-types"
import axios from 'axios';

// const addFav = (character) => {
//     // return {
//     //     type: ADD_FAV,
//     //     payload: character
//     // }
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
// }

const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, character);
            const {data} = response;
            return dispatch({
                type: ADD_FAV,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

// const removeFav = (id) => {
//     // return {
//     //     type: REMOVE_FAV,
//     //     payload: id
//     // }
//     const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: REMOVE_FAV,
//              payload: data,
//        });
//        });
//     };
// }

const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;

    return async (dispatch) => {
        try {
            const response = await axios.delete(endpoint);
            const {data} = response;
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}


export {addFav, removeFav, filterCards, orderCards};