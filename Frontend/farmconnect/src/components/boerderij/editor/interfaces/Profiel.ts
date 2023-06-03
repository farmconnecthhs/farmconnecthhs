import { Openingstijden } from '@/components/boerderij/editor/interfaces/Openingstijden';

export interface Profiel {
  id: number;
  thumbnail: Buffer;
  streetName: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  latitude: string;
  longitude: string;
  farmDescription: string;
  productDescription: string;
  email: string;
  website: string;
  phone: string;
  cashPayment: boolean;
  cardPayment: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  farmId: number;
  BusinessHours: Openingstijden;
}
