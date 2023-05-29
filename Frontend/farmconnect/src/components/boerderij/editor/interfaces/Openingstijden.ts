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
    day: 1,
    openTime: new Date(),
    closeTime: new Date(),
  },
  di: {
    day: 2,
    openTime: new Date(),
    closeTime: new Date(),
  },
  wo: {
    day: 3,
    openTime: new Date(),
    closeTime: new Date(),
  },
  do: {
    day: 4,
    openTime: new Date(),
    closeTime: new Date(),
  },
  vr: {
    day: 5,
    openTime: new Date(),
    closeTime: new Date(),
  },
  za: {
    day: 6,
    openTime: new Date(),
    closeTime: new Date(),
  },
  zo: {
    day: 0,
    openTime: new Date(),
    closeTime: new Date(),
  },
};
