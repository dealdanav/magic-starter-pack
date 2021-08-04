import { ADD_PACK } from './../types';

export const addPack = (pack) => {
    return {
        type: ADD_PACK,
        pack
    };
};