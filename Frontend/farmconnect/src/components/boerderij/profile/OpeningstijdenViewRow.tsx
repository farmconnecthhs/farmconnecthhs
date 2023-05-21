import React from 'react';

import { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';

interface OpeningstijdenViewRowProps {
  openingstijd: Openingstijd;
}

const OpeningstijdenViewRow: React.FunctionComponent<
  OpeningstijdenViewRowProps
> = (props: OpeningstijdenViewRowProps) => {
  const { openingstijd } = props;
  return (
    <div key={openingstijd.day} className={'row row_align_center'}>
      <span>
        {openingstijd.open} - {openingstijd.close}
      </span>
    </div>
  );
};

export default OpeningstijdenViewRow;
