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

const getTypes = async () => {
  let response;

  try {
    response = await fetch(`${apiUrl}/api/list/rentalType`);
  } catch (e) {
    console.error(e);
  }

  const { data } = await response.json();
  return data.rentalTypes;
};

export default {
  getCities,
  getTypes,
};