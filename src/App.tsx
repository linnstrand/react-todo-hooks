import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="mdl-layout  mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <Link to="/" className="mdl-navigation__link">Home</Link>
              <Link to="/todos" className="mdl-navigation__link">Todos</Link>
              <Link to="/archive" className="mdl-navigation__link">Archive</Link>
              <Link to="/about" className="mdl-navigation__link">About</Link>
            </nav>
          </div>
        </header>
        <main className="mdl-layout__content">
          <Route path="/" exact component={Home} />
        </main>
      </div>
    </Router>

  );
}

export default App;
