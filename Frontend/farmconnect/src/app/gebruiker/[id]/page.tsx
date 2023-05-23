import { NextPage } from 'next';

import type { User } from '@/components/gebruiker/profile/interfaces/User';

type ProfileProps = {
  user: User;
};

interface Params {
  id: string;
}

// prettier-ignore
{/* @ts-expect-error Async Server Component */}
const ProfielPage: NextPage<ProfileProps> = async ({
  params,
}: {
  params: Params;
}) => {
  const fetchUserData = async () => {
    try {
      const response = await fetch(
        'http://localhost:3001/api/v1/users/firebase/' + params.id
      );
      return await response.json();
    } catch (error) {
      console.log('Error fetching data:', error);
      return [];
    }
  };

  const user: User = await fetchUserData();
  console.log(user);

  return (
    <div className={'content-container'}>
      <h2>{user.first_name}</h2>
      <p>
        Naam: {user.first_name} {user.last_name}
      </p>
      <p>Email: {user.email_address}</p>
      <p>Telefoonnummer: {user.phone_number}</p>
    </div>
  );
};
export default ProfielPage;
