import React from 'react';
import {Openingstijd} from "../../../interfaces/Openingstijd";
interface OpeningstijdFormRowProps {
    openingstijd: Openingstijd;
    onChangeOpeningstijd: (openingstijd: Openingstijd) => void;
}
const OpeningstijdFormRow: React.FunctionComponent<OpeningstijdFormRowProps> = (props: OpeningstijdFormRowProps) => {
    const {openingstijd, onChangeOpeningstijd} = props;
    return (
        <label key={openingstijd.day}>{openingstijd.day}
            <input
                className={"input_type_time"}
                type={"time"}
                placeholder={"0"}
                disabled={openingstijd.closed}
                onChange={(event) => {
                    const newOpeningstijd = openingstijd;
                    newOpeningstijd.open = event.target.value;
                    onChangeOpeningstijd(newOpeningstijd);
                }
            }
            />
            -
            <input
                className={"input_type_time"}
                type={"time"}
                placeholder={"0"}
                disabled={openingstijd.closed}
                onChange={(event) => {
                    const newOpeningstijd = openingstijd;
                    newOpeningstijd.close = event.target.value;
                    onChangeOpeningstijd(newOpeningstijd);
                }
            }
            />
            Gesloten
            <input
                className={"input_type_toggle"}
                type={"checkbox"}
                defaultChecked={openingstijd.closed}
                onChange={(event) => {
                    const newOpeningstijd = openingstijd;
                    newOpeningstijd.closed = event.target.checked;
                    onChangeOpeningstijd(newOpeningstijd);
                }
            }
            />
        </label>);
}

export default OpeningstijdFormRow;