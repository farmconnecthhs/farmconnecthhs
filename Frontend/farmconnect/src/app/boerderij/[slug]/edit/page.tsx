import {NextPage} from "next";

const EditFarmProfile: NextPage = () => {
    return (
        <div>
            <h1>Bewerk boerderij profiel</h1>
            <div className={"content-container"}>
                <div className={"row"}>
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
            </div>


        </div>
    )
}
export default EditFarmProfile;
