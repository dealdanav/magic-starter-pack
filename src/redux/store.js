import { createStore, combineReducers } from "redux";
import cardReducer from './reducers/card_reducer';

export const store = createStore(
    combineReducers({
        cards: cardReducer,
    })
);