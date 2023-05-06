import React from 'react';
import Card from './Card';
import {BoerderijKaartje} from "@/components/interfaces/BoerderijKaartje";

interface CardListProps {
    boerderijKaartjes: BoerderijKaartje[];
}

const CardList: React.FC<CardListProps> = ({ boerderijKaartjes }) => {
    return (
        <div>
            {boerderijKaartjes.map((boerderijKaartje) => (
                <Card key={boerderijKaartje.naam} boerderijKaartje={boerderijKaartje} />
            ))}
        </div>
    );
};

export default CardList;
