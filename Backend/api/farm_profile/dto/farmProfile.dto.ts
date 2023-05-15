export type CreateFarmProfileDTO = {
  thumbnail?: Buffer;
  address: string;
  postalCode: string;
  city: string;
  farmDescription?: string;
  productDescription?: string;
  email?: string;
  website?: string;
  phone?: string;
  farmId: number;
};
