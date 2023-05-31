import Link from 'next/link';
import React from 'react';

import styles from './FavoritesList.module.css';

/* @ts-expect-error Async Server Component */
export const FavoritesList: React.FunctionComponent = async () => {
  const fetchFavoritesData = async () => {
    try {
      const id = '1';
      const response = await fetch(
        `http://localhost:3001/api/v1/users/${id}/favorites`
      );
      if (!response.ok) {
        return undefined;
      }
      return await response.json();
    } catch (error) {
      console.log('Error fetching data:', error);
      return [];
    }
  };

  const favorites = await fetchFavoritesData();
  console.log(favorites);

  return (
    <div className={styles.container__favorites}>
      <div className={'page__header'}>
        <h1 className={'page__title'}>Favorieten</h1>
      </div>
      {favorites.map((favorite: any) => (
        <div className={styles.row__entry} key={favorite}>
          <Link href={`/boerderij/${favorite.id}`} key={favorite}>
            <div className={styles.row__content}>
              <h3 className={styles.row__title}>{favorite.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
