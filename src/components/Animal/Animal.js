import React from 'react';
import './Animal.css';

export default function Animal({ name, says, top, left, type }) {
  let audio = new Audio(`${process.env.PUBLIC_URL}/animals/${type}.wav`);
  const start = () => {
    audio.play();
  };

  return (
    <div className="animal" style={{ top, left }}>
      <img onClick={start} alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
      <span className="name">{name}</span>
      <span>{says}</span>
    </div>
  );
}
