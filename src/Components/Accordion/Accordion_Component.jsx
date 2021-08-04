import React, { useState, useRef } from "react";

const Accordion = (props) => {
    const [active, setActive] = useState('');
    const [height, setHeight] = useState('0px');
    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === '' ? 'selected' : '');
        setHeight(active === 'selected' ? '0px' : `${content.current.scrollHeight}px`);
    }

    return (
        <article className="accordion-item">
            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <figure>
                    <img src={props.imgUrl} alt={props.title} title={props.title}/>
                </figure>
                <p className="accordion-title">{props.title}</p>
                <figure className="arrow">
                    <img src="./assets/arrow.svg" alt="Magic Wizards" title="Magic the Gathering"/>
                </figure>
            </button>
            <div className="accordion-content" ref={content} style={{ maxHeight: `${height}`}}>
                <div className="info-wrapper">
                    <figure>
                        <img src={props.imgUrl} alt={props.title} title={props.title}/>
                    </figure>
                    <div className="card-text">
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                        <p><b>Type: </b>{props.type}</p>
                        <p><b>Rarity: </b>{props.rarity}</p>
                        <p className="hidden-land"><b>Power / toughness: </b>{props.power} / {props.toughness}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default Accordion;