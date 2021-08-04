import { ADD_PACK } from './../types';

const initialPack = [];

const packReducer = (state = initialPack, action) => {
    switch (action.type) {
        case ADD_PACK:
            return action.pack;
        default:
            return state;
    }
};

export default packReducer;