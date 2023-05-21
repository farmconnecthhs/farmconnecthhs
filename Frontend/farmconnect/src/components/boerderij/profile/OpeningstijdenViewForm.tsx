import React from 'react';

import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';
import OpeningstijdenViewRow from '@/components/boerderij/profile/OpeningstijdenViewRow';

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
          <OpeningstijdenViewRow
            openingstijd={openingstijden[openingstijd as keyof Openingstijden]}
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
