import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPack } from './../../redux/actions/pack';

const PackWrapper = () => {
    const cards = useSelector((state) => state.cards);
    const dispatch = useDispatch();
    const onClickSave = () => {
        dispatch(addPack(cards));
        alert('Pack saved!!!');
    }
    return (
        <div>
            <ul className="list-wrapper">
                {cards.map((card, index) =>(
                    <li key={index}>
                        <h3>{card.name}</h3>
                        <figure>
                            <img src={ card.imgUrl } alt={ card.name } title={ card.name }/>
                        </figure>
                    </li>
                ))}
            </ul>
            <button className="button-starter" onClick={onClickSave}>Save Starter Pack</button>
        </div>
    );
}
export default PackWrapper;