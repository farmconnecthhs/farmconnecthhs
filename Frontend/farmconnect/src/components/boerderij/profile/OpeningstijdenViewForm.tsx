import React from 'react';

import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';
// import OpeningstijdenViewRow from '@/components/boerderij/profile/OpeningstijdenViewRow';

interface OpeningstijdenViewFormProps {
  openingstijden: Openingstijden;
}

const OpeningstijdenViewForm: React.FunctionComponent<
  OpeningstijdenViewFormProps
> = (props) => {
  // const { openingstijden } = props;

  const getOpeningTimes = () => {
    return (
      <div>test</div>
      // openingstijden.map((openingstijden) => (
      //   <OpeningstijdenViewRow
      //     key={openingstijd.day}
      //     openingstijd={openingstijd}
      //   />
    );
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
