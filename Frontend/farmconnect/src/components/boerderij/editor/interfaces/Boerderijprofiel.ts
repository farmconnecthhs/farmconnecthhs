import {Openingstijden} from "@/components/boerderij/editor/interfaces/Openingstijden";
import {Adresgegevens} from "@/components/boerderij/editor/interfaces/Adresgegevens";
import {Betaalmethodes} from "@/components/boerderij/editor/interfaces/Betaalmethodes";

export interface Boerderijprofiel{
    id?: number,
    boerderijNaam: string,
    boerderijBeschrijving: string,
    adresgegevens: Adresgegevens,
    openingstijden: Openingstijden,
    betaalmethodes: Betaalmethodes
}