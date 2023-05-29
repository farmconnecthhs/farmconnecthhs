import React from 'react';

import Card from './Card';

import { FarmProfile } from '@/components/kaart/interfaces/FarmData';

interface FarmCardViewProps {
  farmProfiles: FarmProfile[];
}

const FarmCardView: React.FC<FarmCardViewProps> = ({ farmProfiles }) => {
  return (
    <div>
      <div className="row-grow">
        {farmProfiles.map((farmProfile) => (
          <Card key={farmProfile.profileFarmFarmId} farmProfiles={farmProfile} />
        ))}
      </div>
    </div>
  );
};

export default FarmCardView;
