'use client'
import {NextPage} from "next";
import {useState} from "react";
import {Openingstijd} from "@/components/boerderij/editor/interfaces/Openingstijd";
import {defaultOpeningstijden, Openingstijden} from "@/components/boerderij/editor/interfaces/Openingstijden";
import OpeningstijdenEditForm from "@/components/boerderij/editor/OpeningstijdenEditForm";
import {Adresgegevens} from "@/components/boerderij/editor/interfaces/Adresgegevens";
import AdresGegevensEditForm from "@/components/boerderij/editor/AdresGegevensEditForm";


const EditFarmProfile: NextPage = () => {

    const [openingstijden, setOpeningstijden] =
        useState<Openingstijden>(defaultOpeningstijden);

    const [adresGegevens, setAdresGegevens] =
        useState<Adresgegevens>({straat: "", huisnummer: "", postcode: "", stad: ""});



    function changeOpeningstijd(openingstijd: Openingstijd) {
        setOpeningstijden({...openingstijden, [openingstijd.day]: openingstijd});
        console.log(openingstijd);
    }

    return (
        <>
            <div className={"content-container"}>
                <h1>Bewerk boerderijprofiel</h1>
                <div className={"row row__wrap"}>
                    <div className={"card col margin-s"}>
                        <h2>Boerderij informatie</h2>
                        <input className={"input input--large"} type={"text"} placeholder={"Boerderij naam"}/>
                        <textarea className={"input input--large"} placeholder={"Boerderij website tekst"}/>
                    </div>
                   <AdresGegevensEditForm
                        adresGegevens={adresGegevens}
                        setAdresGegevens={setAdresGegevens}
                   />
                </div>
                <div className={"card col margin-s"}>
                    <h2>Openingstijden</h2>
                    <div className={"row row__wrap"}>
                        <div className={"col"}>
                           <OpeningstijdenEditForm
                                openingstijden={openingstijden}
                                changeOpeningstijd={changeOpeningstijd}
                                setOpeningstijden={setOpeningstijden}
                           />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditFarmProfile;
