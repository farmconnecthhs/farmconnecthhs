import Image from 'next/image';
import React from 'react';

import { FarmProfile } from '@/components/kaart/interfaces/FarmData';

interface CardProps {
  farmCard: FarmProfile;
}

const Card: React.FC<CardProps> = ({ farmCard }) => {
  return (
    <div className="farm-card">
      <div className="card-full-width margin_s">
        <div className="card__image">
          <Image
            className={'card__header__image-full-width'}
            src={'/placeholder.png'}
            alt={''}
            width={200}
            height={200}
          ></Image>
        </div>
        <div className={'card__body'}>
          <div className="card__header">
            <h2>{farmCard.Farm.name}</h2>
          </div>
          <p>{farmCard.city}</p>
          <p>{farmCard.farmDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
