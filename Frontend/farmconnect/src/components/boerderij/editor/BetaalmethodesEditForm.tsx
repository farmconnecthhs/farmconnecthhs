import { Betaalmethodes } from '@/components/boerderij/editor/interfaces/Betaalmethodes';

interface Props {
  betaalmethodes: Betaalmethodes;
  setBetaalmethodes: (betaalmethodes: Betaalmethodes) => void;
}

const BetaalmethodesEditForm: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={'card margin_s'}>
      <h2>Betaalmethodes</h2>
      <div>
        <label htmlFor="contant">Contant</label>
        <input
          type="checkbox"
          id="contant"
          name="contant"
          checked={props.betaalmethodes.cashPayment}
          onChange={(e) =>
            props.setBetaalmethodes({
              ...props.betaalmethodes,
              cashPayment: e.target.checked,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="pin">Pin</label>
        <input
          type="checkbox"
          id="pin"
          name="pin"
          checked={props.betaalmethodes.cardPayment}
          onChange={(e) =>
            props.setBetaalmethodes({
              ...props.betaalmethodes,
              cardPayment: e.target.checked,
            })
          }
        />
      </div>

      <div></div>
    </div>
  );
};

export default BetaalmethodesEditForm;
