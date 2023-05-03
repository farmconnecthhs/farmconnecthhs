import {Openingstijden} from "@/components/boerderij/editor/interfaces/Openingstijden";
import OpeningstijdFormRow from "@/components/boerderij/editor/OpeningstijdFormRow";
import {Openingstijd} from "@/components/boerderij/editor/interfaces/Openingstijd";

interface OpeningstijdenEditFormProps {
    openingstijden: Openingstijden
    changeOpeningstijd: (openingstijd: Openingstijd) => void
    setOpeningstijden: (openingstijden: Openingstijden) => void
}

const OpeningstijdenEditForm: React.FunctionComponent<OpeningstijdenEditFormProps> = (props) => {
    const {openingstijden, changeOpeningstijd, setOpeningstijden} = props;


    const getOpeningTimes = () => {
        const openingTimesElements = [];
        for (let openingstijd in openingstijden) {
            openingTimesElements.push(<OpeningstijdFormRow
                openingstijd={openingstijden[openingstijd as keyof Openingstijden]}
                onChangeOpeningstijd={changeOpeningstijd}/>)
        }
        return openingTimesElements;
    }

    return (
        <div className={"card col margin-s"}>
            <h2>Openingstijden</h2>
            <div className={"row row__wrap"}>
                <div className={"col"}>
                    <div className={"row row__wrap"}>

                        <div className={"col"}>
                            {
                                getOpeningTimes().map((openingstijd) => {
                                        return openingstijd;
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpeningstijdenEditForm;