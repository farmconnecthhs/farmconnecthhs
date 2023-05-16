import { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';
import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';
import OpeningstijdFormRow from '@/components/boerderij/editor/OpeningstijdFormRow';

interface OpeningstijdenViewFormProps {
  openingstijden: Openingstijden;
}

const OpeningstijdenViewForm: React.FunctionComponent<
  OpeningstijdenViewFormProps
> = (props) => {
  const { openingstijden } = props;

  const getOpeningTimes = () => {
    const openingTimesElements = [];
    for (const openingstijd in openingstijden) {
      if (openingstijd) {
        openingTimesElements.push(
          <OpeningstijdFormRow
            openingstijd={openingstijden[openingstijd as keyof Openingstijden]}
            key={openingstijd}
            readOnly
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

export default OpeningstijdenViewForm;
