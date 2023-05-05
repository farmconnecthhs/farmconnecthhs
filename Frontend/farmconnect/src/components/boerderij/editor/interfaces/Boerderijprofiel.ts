import { Adresgegevens } from '@/components/boerderij/editor/interfaces/Adresgegevens';
import { Betaalmethodes } from '@/components/boerderij/editor/interfaces/Betaalmethodes';
import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';

export interface Boerderijprofiel {
  id?: number;
  boerderijNaam: string;
  boerderijBeschrijving: string;
  productenBeschrijving: string;
  adresgegevens: Adresgegevens;
  openingstijden: Openingstijden;
  betaalmethodes: Betaalmethodes;
}
