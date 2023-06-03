import { Betaalmethodes } from '../editor/interfaces/Betaalmethodes';

import styles from './Profiel.module.css';

interface Props {
  betaalmethodes: Betaalmethodes;
}

const BetaalmethodesViewForm: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={`card margin_s ${styles.container}`}>
      <h2 className={styles.title}>Betaalmethodes</h2>
      <div className={styles.row}>
        <label htmlFor="contant" className={styles.label}>Contant:</label>
        <span className={styles.value}>{props.betaalmethodes.cashPayment ? 'Ja' : 'Nee'}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="pin" className={styles.label}>Pin:</label>
        <span className={styles.value}>{props.betaalmethodes.cardPayment ? 'Ja' : 'Nee'}</span>
      </div>
    </div>
  );
};
export default BetaalmethodesViewForm;
