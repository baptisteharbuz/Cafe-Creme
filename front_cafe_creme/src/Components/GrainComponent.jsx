import React, { useEffect, useState } from 'react';
import Grain from "../Assets/Images/Logos/Grain-marron.svg";
import "../Styles/GrainBackgroundStyle.scss";

const Rain = ({ count = 50 }) => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const newIcons = Array.from({ length: count }).map(() => {
      // Création d'une icône avec position et rotation aléatoires
      return {
        id: Math.random(),
        rotation: Math.random() * 360,
        startX: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 7,
      };
    });

    setIcons(newIcons);
  }, [count]);

  return (
    <div className="rain-container">
      {icons.map((icon) => (
        <img
          className='rain-icons'
          key={icon.id}
          src={Grain}
          style={{
            position: 'absolute',
            top: '-5%',
            left: `${icon.startX}%`,
            transform: `rotate(${icon.rotation}deg)`,
            animation: `fall ${icon.duration}s linear ${icon.delay}s infinite`,
          }}
          alt="icon"
        />
      ))}
    </div>
  );
};

export default Rain;