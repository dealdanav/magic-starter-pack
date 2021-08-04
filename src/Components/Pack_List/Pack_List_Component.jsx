// import Accordion from "../Accordion/Accordion_Component";
import { useSelector } from "react-redux";

const PackListComponent = () => {
    const pack = useSelector((state) => state);
    return (
        <ul className="deck-wrapper">
            {pack.cards.map((card, index) =>(
                <li key={index}>
                    <h3>{card.name}</h3>
                    <figure>
                        <img src={ card.imgUrl } alt={ card.name } title={ card.name }/>
                    </figure>
                </li>
            ))}
        </ul>
    );
}
export default PackListComponent;