import Image from 'next/image';
import React from 'react';

import { FarmProfile } from '@/components/kaart/interfaces/FarmData';

interface CardProps {
  farmProfiles: FarmProfile;
}

const Card: React.FC<CardProps> = ({ farmProfiles }) => {
  return (
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
          <h2>{farmProfiles.Farm.name}</h2>
        </div>
        <p>{farmProfiles.city}</p>
        <p>{farmProfiles.farmDescription}</p>
      </div>
    </div>
  );
};

export default Card;
