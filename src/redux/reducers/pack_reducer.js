import { ADD_PACK } from './../types';

const initialState = [];

const packReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PACK:
            return [
                ...state,
                pack
            ];
        default:
            return state;
    }
};

export default packReducer;