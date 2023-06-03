export type CreateFarmProfileDTO = {
  thumbnail?: Buffer;
  streetName: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  farmDescription?: string;
  productDescription?: string;
  email?: string;
  website?: string;
  phone?: string;
  cashPayment: boolean;
  cardPayment: boolean;
  latitude?: number;
  longitude?: number;
  farmId: number;
};
