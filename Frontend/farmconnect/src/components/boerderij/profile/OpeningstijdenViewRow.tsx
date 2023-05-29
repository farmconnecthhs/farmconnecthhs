
import React from 'react';

import styles from './OpeningstijdenViewRow.module.css'

import { Openingstijd } from '@/components/boerderij/editor/interfaces/Openingstijd';


interface OpeningstijdenViewRowProps {
  openingstijd: Openingstijd;
}

const OpeningstijdenViewRow: React.FunctionComponent<
  OpeningstijdenViewRowProps
  > = (props: OpeningstijdenViewRowProps) => {
  const { openingstijd } = props;

  const formatTime = (time: Date | string | undefined) => {
    if (time instanceof Date) {
      return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (typeof time === 'string') {
      const date = new Date(time);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return '';
  };

  const getDayAbbreviation = (day: number) => {
    const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    return days[day];
  };

  return (
    <div className={styles.row}>
      <span className={styles.day}>{getDayAbbreviation(openingstijd.day)}</span>
      <span className={styles.time}>{formatTime(openingstijd.openTime)} - {formatTime(openingstijd.closeTime)}</span>
    </div>
  );
};

export default OpeningstijdenViewRow;
