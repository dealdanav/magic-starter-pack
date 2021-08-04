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
        <div className="accordion-item">
            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion-title">{props.title}</p>
            </button>
            <div className="accordion-content" ref={content} style={{ maxHeight: `${height}`}}>
                <img src={props.imgUrl} alt={props.title} title={props.title}/>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default Accordion;