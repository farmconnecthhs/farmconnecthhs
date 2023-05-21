import React from 'react';

import Card from './Card';

import { FarmProfile } from '@/components/kaart/interfaces/FarmData';

interface FarmCardViewProps {
  farmProfiles: FarmProfile[];
}

const FarmCardView: React.FC<FarmCardViewProps> = ({ farmProfiles }) => {
  return (
    <div>
      <div className="row">
        {farmProfiles.map((farmProfile) => (
          <Card key={farmProfile.farmId} farmProfiles={farmProfile} />
        ))}
      </div>
    </div>
  );
};

export default FarmCardView;
