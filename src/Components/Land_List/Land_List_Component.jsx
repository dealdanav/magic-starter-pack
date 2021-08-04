import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCard } from './../../redux/actions/card';
import Accordion from './../Accordion/Accordion_Component';

const LandListComponent = () => {
    const [lands, setLand] = useState();
    const fetchApi = async () => {
        const apiUrl = 'https://api.magicthegathering.io/v1/cards?types=Land&pageSize=20&contains=imageUrl';
        const res = await fetch(apiUrl);
        const response = await res.json();
        setLand(response);
    }
    useEffect(() =>{
        fetchApi();
    }, []);
    const dispatch = useDispatch();
    // console.log(lands);
    const LandList = !lands ? 'Loading Lands' : lands.cards.map((land, index) => {
        const onClickAdd = () => {
            dispatch(addCard(land.name, land.imageUrl));   
        }
        return (
            <li key={index}>
                <Accordion title={land.name} description={land.originalText} imgUrl={land.imageUrl} type={land.type} rarity={land.rarity} power={land.power} toughness={land.toughness}/>
                <button className="button-add" onClick={onClickAdd}>Add to pack</button>
            </li>
        );
    });
    return (
        <ul className="add-list-wrapper">{LandList}</ul>
    );
}
export default LandListComponent;