import { NextPage } from 'next';
import React from 'react';

import styles from './page.module.css';

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
    <div className={'page content-container'}>
      <div className={'page__header'}>
        <h1 className={'page__title'}>
          Gebruikersprofiel van {user.user_name}
        </h1>
      </div>
      <div className={'card card--small margin_s'}>
        <div className={'card__header'}>
          <h2 className={'card__title'}> {user.user_name}</h2>
        </div>
        <div className={'card__body'}>
          <p className={'card__text'}>
            Naam: {user.first_name} {user.last_name}
          </p>
          <p className={'card__text'}>Email: {user.email_address}</p>
          <p className={'card__text'}>Telefoonnummer: {user.phone_number}</p>
        </div>
        <div className={styles['card__footer']}>
          <button className={'button--icon button--primary'}>
            <svg
              className="button--icon-i"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Aanpassen</title>
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#fff"
                d="M19.7 5.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.4 2.4 1.8-1.8c.4-.4.4-1 0-1.4l-1.8-1.8zM16.5 8.5l-9.9 9.9H3v-3.9l9.9-9.9 3.6 3.9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfielPage;
