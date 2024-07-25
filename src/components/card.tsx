import React from 'react';

interface CardProps {
  heading: string;
  text: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ heading, text, imageSrc }) => {
  return (
    <div className="card-custom">
      <h2 className="card-heading">{heading}</h2>
      <div className="card-content">
        <div className="card-text">{text}</div>
        <div className="card-image">
          <img src={imageSrc} alt="Card image" />
        </div>
      </div>
    </div>
  );
}

export default Card;
