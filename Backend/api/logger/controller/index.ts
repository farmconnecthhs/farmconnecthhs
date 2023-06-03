import { Request, Response } from 'express';

import { Logger } from '../../../db/modules/logger/models/Logger';
import * as LoggerService from '../../../db/modules/logger/services/loggerService';
import { CreateLoggerDTO } from '../dto/logger.dto';

export const create = async (req: Request, res: Response) => {
  try {
    const payload: CreateLoggerDTO = req.body;
    const logger: Logger = await LoggerService.create(payload);
    return res.status(201).send(logger);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const loggers = await LoggerService.getAll();
    if (!loggers) {
      return res.status(404).json({ message: 'Logs not found!' });
    }
    return res.status(200).json(loggers);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const logger = await LoggerService.getById(Number(req.params.id));
    if (!logger) {
      return res.status(404).json({ message: 'Log not found!' });
    }
    return res.status(200).json(logger);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};

export const getByUserId = async (req: Request, res: Response) => {
  try {
    const logger = await LoggerService.getByUserId(Number(req.params.userId));
    if (!logger) {
      return res
        .status(404)
        .json({ message: 'Logs not found for the given user!' });
    }
    return res.status(200).json(logger);
  } catch (err) {
    return res.status(500).json({ message: (err as Error).message });
  }
};
