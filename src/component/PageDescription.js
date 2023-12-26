// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import Films from "./ListeFilms";
import DescriptionFilm from "./DescriptionFilm";

const PageDescription = () => {
  return (
    <div>
      <h2>Liste des films</h2>
      {Films.map((film) => (
        <Link key={Films.title} to={`/Film/${Films.title}`}>
          <DescriptionFilm title={Films.title} />
        </Link>
      ))}
    </div>
  );
};
export default PageDescription;
