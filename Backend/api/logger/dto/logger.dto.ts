export type CreateLoggerDTO = {
  date: Date;
  service_name: string;
  level: string;
  message?: string;
  userId?: number;
};
