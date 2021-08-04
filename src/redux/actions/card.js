import { ADD_CARD, DELETE_CARD } from './../types';

export const addCard = (name, imgUrl) => {
    return {
        type: ADD_CARD,
        payload: { name, imgUrl }
    };
};

export const deleteCard = (id) => {
    return {
        type: DELETE_CARD,
        id
    };
};