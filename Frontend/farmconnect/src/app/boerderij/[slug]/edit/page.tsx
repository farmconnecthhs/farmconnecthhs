'use client'
import {NextPage} from "next";
import {useState} from "react";
import {Openingstijd} from "@/components/boerderij/editor/interfaces/Openingstijd";
import {defaultOpeningstijden, Openingstijden} from "@/components/boerderij/editor/interfaces/Openingstijden";
import OpeningstijdenEditForm from "@/components/boerderij/editor/OpeningstijdenEditForm";
import {Adresgegevens} from "@/components/boerderij/editor/interfaces/Adresgegevens";
import AdresGegevensEditForm from "@/components/boerderij/editor/AdresGegevensEditForm";
import {Betaalmethodes} from "@/components/boerderij/editor/interfaces/Betaalmethodes";
import BetaalmethodesEditForm from "@/components/boerderij/editor/BetaalmethodesEditForm";
import {Boerderijprofiel} from "@/components/boerderij/editor/interfaces/Boerderijprofiel";


const EditFarmProfile: NextPage = () => {

    //TODO: get slug from url and fetch boerderijprofiel from backend

    const [openingstijden, setOpeningstijden] =
        useState<Openingstijden>(defaultOpeningstijden);

    const [adresGegevens, setAdresGegevens] =
        useState<Adresgegevens>({straat: "", huisnummer: "", postcode: "", stad: ""});

    const [betaalmethoden, setBetaalmethoden] =
        useState<Betaalmethodes>({contant: false, pin: false});

    const [boerderijNaam, setBoerderijNaam] = useState<string>("");
    const [boerderijWebsiteTekst, setBoerderijWebsiteTekst] =
        useState<string>("");

    const [boerderijprofiel, setBoerderijProfiel] =
        useState<Boerderijprofiel | null>(null);


    function changeOpeningstijd(openingstijd: Openingstijd) {
        setOpeningstijden({...openingstijden, [openingstijd.day]: openingstijd});
    }

    function saveProfile() {
        const profiel: Boerderijprofiel = {
            boerderijNaam: boerderijNaam,
            boerderijBeschrijving: boerderijWebsiteTekst,
            adresgegevens: adresGegevens,
            openingstijden: openingstijden,
            betaalmethodes: betaalmethoden
        }
        setBoerderijProfiel(profiel);
        //TODO deze vervangen door een api call
        console.log("save profile");
        console.log(JSON.stringify(profiel))
    }

    return (
        <>
            <div className={"content-container"}>
                <h1>Bewerk boerderijprofiel</h1>
                <div className={'row'}>
                    <button className={''} onClick={saveProfile}>Save</button>
                </div>
                <div className={"row row__wrap"}>
                    <div className={"card col margin-s"}>
                        <h2>Boerderij informatie</h2>
                        <input
                            className={"input input--large"}
                            type={"text"}
                            placeholder={"Boerderij naam"}
                            onChange={(e) => setBoerderijNaam(e.target.value)}
                        />
                        <textarea
                            className={"input input--large"}
                            placeholder={"Boerderij website tekst"}
                            onChange={(e) => setBoerderijWebsiteTekst(e.target.value)}
                        />
                        {/*TODO gamification elementen uitwerken*/}
                    </div>


                    <div className={'col'}>
                        <AdresGegevensEditForm
                            adresGegevens={adresGegevens}
                            setAdresGegevens={setAdresGegevens}
                        />
                        <OpeningstijdenEditForm
                            openingstijden={openingstijden}
                            changeOpeningstijd={changeOpeningstijd}
                            setOpeningstijden={setOpeningstijden}
                        />
                        <BetaalmethodesEditForm
                            betaalmethodes={betaalmethoden}
                            setBetaalmethodes={setBetaalmethoden}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditFarmProfile;
