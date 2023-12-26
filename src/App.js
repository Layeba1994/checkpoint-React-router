// App.js
import React from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import DescriptionFilm from "./component/DescriptionFilm";
import PageDescription from "./component/PageDescription";

function App() {
  return (
    <div>
      <Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={PageDescription} />
        <Route path="/Films/:title" component={DescriptionFilm} />
      </Routes>
    </div>
  );
}

export default App;
