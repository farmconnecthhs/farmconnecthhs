interface Farm {
  name: string;
}

export interface FarmProfile {
  thumbnail?: Buffer;
  streetName: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  latitude?: number;
  longitude?: number;
  farmDescription?: string;
  productDescription?: string;
  email?: string;
  website?: string;
  phone?: string;
  farmId: number;
  Farm: Farm;
}
