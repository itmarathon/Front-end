const apiUrl = 'http://localhost:3000';

const getCities = async () => {
  let response;

  try {
    response = await fetch(`${apiUrl}/api/list/city`);
  } catch (e) {
    console.error(e);
  }

  const { data } = await response.json();
  return data.cities;
};

const getRentalTypes = async () => {
  let response;

  try {
    response = await fetch(`${apiUrl}/api/list/rentalType`);
  } catch (e) {
    console.error(e);
  }

  const { data } = await response.json();
  return data.rentalTypes;
};

const getFlats = async () => {
  let response;

  try {
    response = await fetch(`${apiUrl}/api/apartment?all=true&page=1&perPage=20`);
  } catch (e) {
    console.error(e);
  }

  const { data } = await response.json();
  return data.apartments;
};

const getFlat = async (id) => {
  let response;

  try {
    response = await fetch(`${apiUrl}/api/apartment/${id}`);
  } catch (e) {
    console.error(e);
  }

  const { data } = await response.json();
  return data.apartment;
};

export default {
  getCities,
  getRentalTypes,
  getFlats,
  getFlat,
};