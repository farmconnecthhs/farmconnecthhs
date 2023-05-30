export type CreateBusinessHoursDTO = {
  id: number;
  day: number;
  closed: boolean;
  openTime: Date;
  closeTime: Date;
  farmId: number;
};
