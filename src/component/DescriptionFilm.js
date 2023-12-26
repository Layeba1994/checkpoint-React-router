// MovieDetailPage.js
import React from "react";
import { Link } from "react-router-dom";

const DescriptionFilm = () => {
  // Fetch movie details using the id

  return (
    <div>
      <h2>Détails du film</h2>
      {/* Afficher la description et la bande-annonce ici */}
      <p>Description du film...</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Xlia49w_MHA"
        title="un Triomphe"
      ></iframe>

      <br />
      <Link to="/">Revenir à la page d'accueil</Link>
    </div>
  );
};

export default DescriptionFilm;
