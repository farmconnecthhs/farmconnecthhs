import React from 'react';

import styles from './Profiel.module.css';

import { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';

interface OpeningstijdenViewRowProps {
  openingstijd: Openingstijd;
}

const OpeningstijdenViewRow: React.FunctionComponent<OpeningstijdenViewRowProps> = (props: OpeningstijdenViewRowProps) => {
  const { openingstijd } = props;

  const formatTime = (time: Date | string | undefined) => {
    if (time instanceof Date) {
      return time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    } else if (typeof time === 'string') {
      const currentDate = new Date(time);
      return currentDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    return '';
  };

  const getDayAbbreviation = (day: number) => {
    const days = [
      'Maandag',
      'Dinsdag',
      'Woensdag',
      'Donderdag',
      'Vrijdag',
      'Zaterdag',
      'Zondag',
    ];
    return days[day];
  };

  return (
    <div className={styles.row}>
      <span className={`${styles.label} ${styles.day}`}>{getDayAbbreviation(openingstijd.day)}</span>
      {openingstijd.closed ? (
        <span className={styles.value}>Gesloten</span>
      ) : (
        <span className={styles.value}>
          {formatTime(openingstijd.openTime)} - {formatTime(openingstijd.closeTime)}
        </span>
      )}
    </div>
  );
};

export default OpeningstijdenViewRow;
