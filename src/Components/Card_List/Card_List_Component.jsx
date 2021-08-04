const CardListComponent = () => {
    const Cards =[
        {
            name: "Ancestor's Chosen",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
        },
        {
            name: "Angel of Mercy",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129465&type=card",
        },
        {
            name: "Aven Cloudchaser",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129470&type=card",
        },
        {
            name: "Ballista Squad",
            imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129477&type=card",
        }
    ];
    const CardsList = Cards.map((card, index) => {
        return (
            <li key={index}>
                <h3>{card.name}</h3>
                <figure>
                    <img src={card.imageUrl} alt={card.name} title={card.name}/>
                </figure>
            </li>
        );
    });
    return (
        <ul className="list-wrapper">{CardsList}</ul>
    );
}
export default CardListComponent;