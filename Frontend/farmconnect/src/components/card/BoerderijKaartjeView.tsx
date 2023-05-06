import React from 'react';
import Card from './Card';
import {BoerderijKaartje} from "@/components/interfaces/BoerderijKaartje";

interface Props {
    boerderijKaartje: BoerderijKaartje;
}

const boerderijKaartjes: BoerderijKaartje[] = [
    {
        naam: 'Farm 1',
        afstand: '24km'
    },
    {
        naam: 'Farm 2',
        afstand: '24km'
    },
    {
        naam: 'Farm 3',
        afstand: '24km'
    },
    {
        naam: 'Farm 4',
        afstand: '24km'
    },
];

const BoerderijKaartjeView: React.FC = () => {
    return (
        <div>
            {boerderijKaartjes.map((boerderijKaartje) => (
                <Card boerderijKaartje={boerderijKaartje}/>
            ))}
        </div>
    );
};

export default BoerderijKaartjeView;
