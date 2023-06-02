import { Openingstijd } from './Openingstijd';

export interface Openingstijden {
  ma: Openingstijd;
  di: Openingstijd;
  wo: Openingstijd;
  do: Openingstijd;
  vr: Openingstijd;
  za: Openingstijd;
  zo: Openingstijd;
}

export const defaultOpeningstijden: Openingstijden = {
  ma: {
    day: 0,
    closed: false,
    openTime: new Date(),
    closeTime: new Date(),
  },
  di: {
    day: 1,
    closed: false,
    openTime: new Date(),
    closeTime: new Date(),
  },
  wo: {
    day: 2,
    closed: false,
    openTime: new Date(),
    closeTime: new Date(),
  },
  do: {
    day: 3,
    closed: false,
    openTime: new Date(),
    closeTime: new Date(),
  },
  vr: {
    day: 4,
    closed: false,
    openTime: new Date(),
    closeTime: new Date(),
  },
  za: {
    day: 5,
    closed: false,
    openTime: new Date(),
    closeTime: new Date(),
  },
  zo: {
    day: 6,
    closed: false,
    openTime: new Date(),
    closeTime: new Date(),
  },
};
