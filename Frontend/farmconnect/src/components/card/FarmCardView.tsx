import React from 'react';

import Card from './Card';

import { FarmCard } from '@/components/interfaces/FarmCard';

const farmCards: FarmCard[] = [
  {
    naam: 'Jac. Uittenbogaart & zonen',
    afstand: '24km',
    beschrijving: 'Kippetjes, lammetjes, schaapies en aardappelen',
  },
  {
    naam: 'Henk Jan en zijn verloren koffer',
    afstand: '301km',
    beschrijving: 'Eieren voor een prikkie',
  },
  {
    naam: 'Oma Bob de krokkettendraaier',
    afstand: '24km',
    beschrijving: 'Prei',
  },
  {
    naam: 'Roos Marijn',
    afstand: '24km',
    beschrijving: 'Kaas',
  },
  {
    naam: 'Corry Anders',
    afstand: '24km',
    beschrijving: 'Peren',
  },
  {
    naam: 'Peter Selie',
    afstand: '24km',
    beschrijving: 'Bowlingballen',
  },
];

const FarmCardView: React.FC = () => {
  return (
    <div>
      <div className={'row'}>
        {farmCards.map((farmCard, index) => (
          <Card key={index} farmCard={farmCard} />
        ))}
      </div>
    </div>
  );
};

export default FarmCardView;
