import React from 'react';
import {Openingstijd} from "@/components/boerderij/editor/interfaces/Openingstijd";
import styles from './OpeningstijdenFormRow.module.css';
interface OpeningstijdFormRowProps {
    openingstijd: Openingstijd;
    onChangeOpeningstijd: (openingstijd: Openingstijd) => void;
}
const OpeningstijdFormRow: React.FunctionComponent<OpeningstijdFormRowProps> = (props: OpeningstijdFormRowProps) => {
    const {openingstijd, onChangeOpeningstijd} = props;
    return (
        <div key={openingstijd.day} className={'row row_align_center'}>
            <div className={styles['label-mono']}>{openingstijd.day}</div>
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
            <div className={styles['label-spacing']}>Gesloten</div>
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
        </div>);
}

export default OpeningstijdFormRow;