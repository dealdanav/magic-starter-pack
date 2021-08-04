import { ADD_CARD, DELETE_CARD } from './../types';

const initialState = [];

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state,
                {
                    name: action.payload.name,
                    imgUrl: action.payload.imgUrl,
                }
            ];
        case DELETE_CARD:
            return (state = state.filter((card)=>{
                return card.id !== action.id;
            }));
        default:
            return state;
    }
};

export default cardReducer;