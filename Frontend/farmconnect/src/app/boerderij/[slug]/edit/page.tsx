'use client'
import {NextPage} from "next";
import {useState} from "react";
import {Openingstijd} from "../../../../../interfaces/Openingstijd";
import {defaultOpeningstijden, Openingstijden} from "../../../../../interfaces/Openingstijden";
import OpeningstijdFormRow from "@/components/boerderij/OpeningstijdFormRow";
import OpeningstijdenEditForm from "@/components/boerderij/editor/OpeningstijdenEditForm";


const EditFarmProfile: NextPage = () => {

    const [openingstijden, setOpeningstijden] =
        useState<Openingstijden>(defaultOpeningstijden);

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
                    <div className={"card col margin-s"}>
                        <h2>Bezoekersaddress</h2>
                        <input className={"input"} type={"text"} placeholder={"straat"}/>
                        <input className={"input"} type={"text"} placeholder={"huisnummer"}/>
                        <input className={"input"} type={"text"} placeholder={"postcode"}/>
                        <input className={"input"} type={"text"} placeholder={"stad"}/>
                    </div>
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
