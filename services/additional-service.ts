import additionalRepository from "../repositories/additional-repository";

const getLanguages = async () => {
  const data = (await additionalRepository.getLanguages()).data;
  const result: any = [];

  data.forEach((item: any) => {
    result.push({
      id: item.id,
      naziv: item.naziv,
    });
  });

  return result;
};

const getPublishers = async () => {
  const data = (await additionalRepository.getPublishers()).data;
  const result: any = [];

  data.forEach((item: any) => {
    result.push({
      id: item.id,
      naziv: item.naziv,
      adresa: item.adresa,
    });
  });

  return result;
};

const getPismo = async () => {
  const data = (await additionalRepository.getPismo()).data;
  const result: any = [];

  data.forEach((item: any) => {
    result.push({
      id: item.id,
      naziv: item.naziv,
    });
  });

  return result;
};

const getFormat = async () => {
  const data = (await additionalRepository.getFormat()).data;
  const result: any = [];

  data.forEach((item: any) => {
    result.push({
      id: item.id,
      naziv: item.naziv,
    });
  });

  return result;
};

const getPovez = async () => {
  const data = (await additionalRepository.getPovez()).data;
  const result: any = [];

  data.forEach((item: any) => {
    result.push({
      id: item.id,
      naziv: item.naziv,
    });
  });

  return result;
};

export default { getLanguages, getPublishers, getPismo, getFormat, getPovez };
