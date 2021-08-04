// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from './../../redux/actions/card';
import Accordion from './../Accordion/Accordion_Component';

const LandListComponent = () => {
    const Lands =[
        {
            name: 'Adarkar Wastes',
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129458&type=card",
        },
        {
            name: "Faerie Conclave",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=106531&type=card",
        },
        {
            name: "Faerie Conclave",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=106531&type=card",
        },
        {
            name: "Battlefield Forge",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129479&type=card",
        }
    ];
    // const [value, setValue] = useState('');
    // const [valueImg, setValueImg] = useState('');
    const dispatch = useDispatch();
    const LandList = Lands.map((land, index) => {
        const onClickAdd = () => {
            dispatch(addCard(land.name, land.imageUrl));   
        }
        return (
            <li key={index}>
                <Accordion title={land.name} description={land.title} imgUrl={land.imageUrl}/>
                <button onClick={onClickAdd}>Save to store</button>
            </li>
        );
    });
    return (
        <ul className="list-wrapper">{LandList}</ul>
    );
}
export default LandListComponent;