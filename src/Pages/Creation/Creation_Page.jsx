import LandListComponent from './../../Components/Land_List/Land_List_Component';
import CardListComponent from './../../Components/Card_List/Card_List_Component';
import PackWrapper from './../../Components/Pack/Pack_Wrapper';

const Creation_Page = () => {
    return (
        <article className="creation-page">
            <h1 className="page-title">Create and save your Starter Pack</h1>
            <div className="lands-list">
                <h2 className="block-title">Choose your basic lands</h2>
                <LandListComponent />
            </div>
            <div className="cards-list">
                <h2 className="block-title">Choose your cards</h2>
                <CardListComponent />
            </div>
            <div className="pack-list">
                <h2 className="block-title">Starter Pack</h2>
                <PackWrapper />
            </div>
        </article>
    );
}
export default Creation_Page;