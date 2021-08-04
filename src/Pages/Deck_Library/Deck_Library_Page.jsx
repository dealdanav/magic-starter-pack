import PackListComponent from './../../Components/Pack_List/Pack_List_Component';

const Deck_Library_Page = () => {
    return (
        <article className="deck-library-page">
            <figure className="background-home">
                <img src="./assets/background_library.jpg" alt="Magic Wizards" title="Magic the Gathering"/>
            </figure>
            <h1 className="page-title">Review or delete your packs</h1>
            <div className="library-content-wrapper">
                <PackListComponent />
            </div>
        </article>
    );
}
export default Deck_Library_Page;