import { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';
import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';
import OpeningstijdFormRow from '@/components/boerderij/editor/OpeningstijdFormRow';

interface OpeningstijdenEditFormProps {
  openingstijden: Openingstijden;
  changeOpeningstijd: (openingstijd: Openingstijd) => void;
}

const OpeningstijdenEditForm: React.FunctionComponent<
  OpeningstijdenEditFormProps
> = (props) => {
  const { openingstijden, changeOpeningstijd } = props;

  const getOpeningTimes = () => {
    const openingTimesElements = [];
    for (const openingstijd in openingstijden) {
      if (openingstijd) {
        openingTimesElements.push(
          <OpeningstijdFormRow
            openingstijd={openingstijden[openingstijd as keyof Openingstijden]}
            onChangeOpeningstijd={changeOpeningstijd}
            key={openingstijd}
          />
        );
      }
    }
    return openingTimesElements;
  };

  return (
    <div className={'card col margin_s'}>
      <h2>Openingstijden</h2>
      <div className={'row row__wrap'}>
        <div className={'col'}>
          <div className={'row row__wrap'}>
            <div className={'col'}>
              {getOpeningTimes().map((openingstijd) => {
                return openingstijd;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningstijdenEditForm;
