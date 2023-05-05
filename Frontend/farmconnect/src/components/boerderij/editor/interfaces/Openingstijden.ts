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
    day: 'ma',
    closed: false,
  },
  di: {
    day: 'di',
    closed: false,
  },
  wo: {
    day: 'wo',
    closed: false,
  },
  do: {
    day: 'do',
    closed: false,
  },
  vr: {
    day: 'vr',
    closed: false,
  },
  za: {
    day: 'za',
    closed: false,
  },
  zo: {
    day: 'zo',
    closed: false,
  },
};
