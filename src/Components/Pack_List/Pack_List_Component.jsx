// import Accordion from "../Accordion/Accordion_Component";
import { useSelector } from "react-redux";

const PackListComponent = () => {
    const pack = useSelector((state) => state.cards);
    return (
        <ul className="deck-wrapper">
            {pack.map((card, index) =>(
                <li key={index}>
                    <figure className="deck-img">
                        <img src={ card.imgUrl } alt={ card.name } title={ card.name }/>
                    </figure>
                    <h3>{card.name}</h3>
                </li>
            ))}
        </ul>
    );
}
export default PackListComponent;