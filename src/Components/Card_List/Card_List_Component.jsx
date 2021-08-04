import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCard } from './../../redux/actions/card';
import Accordion from './../Accordion/Accordion_Component';

const CardListComponent = () => {
    const [cards, setCards] = useState();
    const fetchApi = async () => {
        const apiUrl = 'https://api.magicthegathering.io/v1/cards?pageSize=50&contains=imageUrl';
        const res = await fetch(apiUrl);
        const response = await res.json();
        setCards(response);
    }
    useEffect(() =>{
        fetchApi();
    }, []);
    const dispatch = useDispatch();
    // console.log(cards);
    const cardList = !cards ? 'Loading Cards' : cards.cards.map((card, index) => {
        const onClickAdd = () => {
            dispatch(addCard(card.name, card.imageUrl));   
        }
        return (
            <li key={index}>
                <Accordion title={card.name} description={card.originalText} imgUrl={card.imageUrl} type={card.type} rarity={card.rarity} power={card.power} toughness={card.toughness}/>
                <button className="button-add" onClick={onClickAdd}>Add to pack</button>
            </li>
        );
    });
    return (
        <ul className="add-list-wrapper">{cardList}</ul>
    );
}
export default CardListComponent;