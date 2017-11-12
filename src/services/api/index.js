const apiUrl = 'http://localhost:3000';

const getCities = async () => {
  let response;

  try {
    response = await fetch(`${apiUrl}/api/list/city`);
  } catch (e) {
    console.error(e);
  }

  const { data } = await response.json();
  console.log(data);
  return data.cities;
};

export default {
  getCities,
};