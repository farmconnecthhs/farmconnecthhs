import React, {useState} from 'react';
import {Adresgegevens} from "../editor/interfaces/Adresgegevens";

interface Props {
    setAdresGegevens: (adresGegevens: Adresgegevens) => void;
    adresGegevens: Adresgegevens;
}

const AdresGegevensEditForm: React.FunctionComponent<Props> = (props: Props) => {

    const {setAdresGegevens, adresGegevens} = props;

    function changeAdresGegevens(adresGegevens: Adresgegevens) {
        setAdresGegevens(adresGegevens);
    }

    return (
        <div className={"card col margin-s"}>
            <h2>Bezoekersaddress</h2>
            <input
                className={"input"}
                type={"text"}
                placeholder={"straat"}
                onChange={(e) =>
                    changeAdresGegevens({...adresGegevens, straat: e.target.value})}
            />
            <input

                className={"input"}
                type={"text"}
                placeholder={"huisnummer"}
                onChange={(e) =>
                    changeAdresGegevens({...adresGegevens, huisnummer: e.target.value})}
            />
            <input

                className={"input"}
                type={"text"}
                placeholder={"postcode"}
                onChange={(e) =>
                    changeAdresGegevens({...adresGegevens, postcode: e.target.value})}
            />
            <input

                className={"input"}
                type={"text"}
                placeholder={"stad"}
                onChange={(e) =>
                    changeAdresGegevens({...adresGegevens, stad: e.target.value})}
            />
        </div>
    );
}

export default AdresGegevensEditForm;