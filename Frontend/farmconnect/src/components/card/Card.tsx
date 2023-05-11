import React from 'react';

import { FarmCard } from '@/components/interfaces/FarmCard';

interface CardProps {
  farmCard: FarmCard;
}

const Card: React.FC<CardProps> = ({ farmCard }) => {
  return (
    <div className="farm-card">
      <div className="card-full-width margin_s">
        <div className="card__image">
          <img
            className={'card__header__image-full-width'}
            src={'placeholder.png'}
            alt={''}
          ></img>
        </div>
        <div className={'card__body'}>
          <div className="card__header">
            <h2>{farmCard.naam}</h2>
          </div>
          <p>{farmCard.afstand}</p>
          <p>{farmCard.beschrijving}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
