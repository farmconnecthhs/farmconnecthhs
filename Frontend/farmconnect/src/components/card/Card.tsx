import React from 'react';

import './Card.css';
import { FarmCard } from '@/components/interfaces/FarmCard';

interface CardProps {
  farmCard: FarmCard;
}

const Card: React.FC<CardProps> = ({ farmCard }) => {
  return (
    <div className="card">
      <h2>{farmCard.naam}</h2>
      <p>{farmCard.afstand}</p>
      <p>{farmCard.beschrijving}</p>
    </div>
  );
};

export default Card;
