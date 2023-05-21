import { Betaalmethodes } from '../editor/interfaces/Betaalmethodes';

interface Props {
  betaalmethodes: Betaalmethodes;
}

const BetaalmethodesViewForm: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={'card margin_s'}>
      <h2>Betaalmethodes</h2>
      <div>
        <label htmlFor="contant">Contant:</label>
        <span>{props.betaalmethodes.contant ? ' Ja' : ' Nee'}</span>
      </div>
      <div>
        <label htmlFor="pin">Pin:</label>
        <span>{props.betaalmethodes.pin ? ' Ja' : ' Nee'}</span>
      </div>
    </div>
  );
};
export default BetaalmethodesViewForm;
