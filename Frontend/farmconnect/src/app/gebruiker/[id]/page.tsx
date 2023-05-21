import { NextPage } from 'next';
import { useRouter } from 'next/router';

import type { User } from '@/components/gebruiker/profile/interfaces/User';

// const router = useRouter();
// const { id } = router.query;

type ProfileProps = {
  user: User;
};

const ProfielPage: NextPage<ProfileProps> = ({ user }) => {
  const data: User = {
    voornaam: 'Jan',
    achternaam: 'Janssen',
    gebruikersnaam: 'janj',
    email: 'janj@example.com',
    telefoonnummer: '0123456789',
  };

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

export async function getServerSideProps() {
  const data: User = {
    voornaam: 'Jan',
    achternaam: 'Janssen',
    gebruikersnaam: 'janj',
    email: 'janj@example.com',
    telefoonnummer: '0123456789',
  };

  return {
    props: { user: data },
  };
}

export default ProfielPage;
