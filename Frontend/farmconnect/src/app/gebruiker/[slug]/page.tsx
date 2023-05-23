import { NextPage } from 'next';

import { AddPost } from '@/components/gebruiker/profile/interfaces/Params';
import type { User } from '@/components/gebruiker/profile/interfaces/User';

type ProfileProps = {
  user: User;
};

// prettier-ignore
{/* @ts-expect-error Async Server Component */}
const ProfielPage: NextPage<ProfileProps> = async () => {
  const id: string = AddPost('slug');
  console.log(id);
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        'http://localhost:3001/api/v1/users/firebase/' + id
      );
      return await response.json();
    } catch (error) {
      console.log('Error fetching data:', error);
      return [];
    }
  };

  const userData = await fetchUserData();

  return (
    <div className={'content-container'}>
      <h2>{userData.gebruikersnaam}</h2>
      <p>
        Naam: {userData.voornaam} {userData.achternaam}
      </p>
      <p>Email: {userData.email}</p>
      <p>Telefoonnummer: {userData.telefoonnummer}</p>
    </div>
  );
};
export default ProfielPage;
