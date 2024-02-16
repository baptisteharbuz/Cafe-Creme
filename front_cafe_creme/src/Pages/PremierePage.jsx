import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "../Styles/AccueilStyle.scss";
// VIDEOS
import CafeCremeVideo from "../Assets/Videos/Cafe-creme-video.mp4"



const Accueil = () => {
  return (

      <div className="accueil-container">
                <video autoPlay loop muted className="fullscreen-video">
          <source src={CafeCremeVideo} type="video/mp4"></source>
        </video>
      </div>
    

  );
};

export default Accueil;
