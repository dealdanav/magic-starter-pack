import './App.scss';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Home_Page from './Pages/Home/Home_Page';
import Creation_Page from './Pages/Creation/Creation_Page';
import Deck_Library_Page from './Pages/Deck_Library/Deck_Library_Page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-header">
          <nav className="navigation">
            <ul>
              <li>
                <a href="https://magic.wizards.com/" target="_blank" rel="noopener noreferrer">
                  <figure className="logo">
                    <img src="./assets/MX_Nav_EN.png" alt="Magic Wizards"/>
                  </figure>
                </a>
              </li>
              <li>
                <NavLink to="/" exact className="App-link" activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/creation" exact className="App-link" activeClassName='active'>
                  Create Starter Pack
                </NavLink>
              </li>
              <li>
                <NavLink to="/deck-library" exact className="App-link" activeClassName='active'>
                  Pack Library
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route exact path="/" component={Home_Page}/>
            <Route exact path="/creation" component={Creation_Page}/>
            <Route exact path="/deck-library" component={Deck_Library_Page}/>
          </Switch>
        </section>
        <footer className="app-footer">
          <p>This website is only for academics purposes. Not produced, endorsed, supported, or affiliated with wizards of the coast. The data is provided by:</p>
          <a
            className="App-link"
            href="https://magicthegathering.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MAGIC: THE GATHERING - DEVELOPERS
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
