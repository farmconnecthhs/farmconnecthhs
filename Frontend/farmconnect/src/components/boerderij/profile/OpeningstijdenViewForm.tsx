import React from 'react';

import { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';
import OpeningstijdenViewRow from '@/components/boerderij/profile/OpeningstijdenViewRow';

interface OpeningstijdenViewFormProps {
  openingstijden: Openingstijd[];
}

const OpeningstijdenViewForm: React.FunctionComponent<
  OpeningstijdenViewFormProps
> = (props) => {
  const { openingstijden } = props;

  const getOpeningTimes = () => {
    return openingstijden.map((openingstijd) => (
      <OpeningstijdenViewRow
        key={openingstijd.day}
        openingstijd={openingstijd}
      />
    ));
  };

  return (
    <div className="card col margin_s">
      <h2>Openingstijden</h2>
      <div className="row row__wrap">
        <div className="col">
          <div className="row row__wrap">
            <div className="col">{getOpeningTimes()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningstijdenViewForm;
