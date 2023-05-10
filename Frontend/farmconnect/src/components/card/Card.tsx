import React from 'react';

import { FarmCard } from '@/components/interfaces/FarmCard';

interface CardProps {
  farmCard: FarmCard;
}

const Card: React.FC<CardProps> = ({ farmCard }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h2>{farmCard.naam}</h2>
      </div>
      <div className="card__image">
        <img
          className={'card__header__image'}
          src={'placeholder.png'}
          alt={''}
        ></img>
      </div>
      <p>{farmCard.afstand}</p>
      <p>{farmCard.beschrijving}</p>
      <button className="button button--primary">Button</button>
    </div>
  );
};

export default Card;
