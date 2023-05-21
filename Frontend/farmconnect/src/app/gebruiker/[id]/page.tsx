import { NextPage } from 'next';

import type { User } from '@/components/gebruiker/profile/interfaces/User';

type ProfileProps = {
  user: User;
};

const ProfielPage: NextPage<ProfileProps> = ({ user }) => {
  return (
    <div className={'content-container'}>
      <h2>{user.gebruikersnaam}</h2>
      <p>
        Naam: {user.voornaam} {user.achternaam}
      </p>
      <p>Email: {user.email}</p>
      <p>Telefoonnummer: {user.telefoonnummer}</p>
    </div>
  );
};

export default ProfielPage;
