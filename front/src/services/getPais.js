import instance from "./config";

export const getPais = async () => {
  const url = `/countries`;
  const response = await instance.get(url);
  return response;
};

export const getProvincia = async (pais) => {
  try {
    const url = `countries/${pais}/states`;
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCiudad = async (pais, provincia) => {
  try {
    const url = `countries/${pais}/states/${provincia}/cities`;
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
