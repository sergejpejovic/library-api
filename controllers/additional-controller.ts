import { Response, Request } from "express";
import additionalService from "../services/additional-service";

const getLanguages = async (req: Request, res: Response) => {
  const data = await additionalService.getLanguages();
  res.send(data);
};

const getFormat = async (req: Request, res: Response) => {
  const data = await additionalService.getFormat();
  res.send(data);
};

const getPublishers = async (req: Request, res: Response) => {
  const data = await additionalService.getPublishers();
  res.send(data);
};

const getPovez = async (req: Request, res: Response) => {
  const data = await additionalService.getPovez();
  res.send(data);
};

const getPismo = async (req: Request, res: Response) => {
  const data = await additionalService.getPismo();
  res.send(data);
};

export default { getLanguages, getFormat, getPublishers, getPismo, getPovez };
