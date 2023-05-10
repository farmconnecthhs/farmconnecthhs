import React from 'react';

import placeholderImage from '/public/img/placeholder.png';

import Card from './Card';

import { FarmCard } from '@/components/interfaces/FarmCard';

const farmCards: FarmCard[] = [
  {
    naam: 'Farm 1',
    afstand: '24km',
    beschrijving: 'Gewoon wat',
  },
  {
    naam: 'Farm 2',
    afstand: '24km',
    beschrijving: 'Gewoon wat',
  },
  {
    naam: 'Farm 3',
    afstand: '24km',
    beschrijving: 'Gewoon wat',
  },
  {
    naam: 'Farm 4',
    afstand: '24km',
    beschrijving: 'Gewoon wat',
  },
];

const FarmCardView: React.FC = () => {
  return (
    <div>
      {farmCards.map((farmCard, index) => (
        <Card key={index} farmCard={farmCard} imageSrc={placeholderImage.src} />
      ))}
    </div>
  );
};

export default FarmCardView;
