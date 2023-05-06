
import React from 'react';
import './Card.css';
import {BoerderijKaartje} from "@/components/interfaces/BoerderijKaartje";

interface CardProps {
    boerderijKaartje: BoerderijKaartje;
}

const Card: React.FC<CardProps> = ({ boerderijKaartje }) => {
    return (
        <div className="card">
            <h2>{boerderijKaartje.naam}</h2>
            <p>{boerderijKaartje.afstand}</p>
        </div>
    );
};

export default Card;
