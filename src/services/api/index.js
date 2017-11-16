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

const getFlats = () => mockFlats;

const mockFlats = [
  {
    id: '1',
    img: '/tmp.jpg',
    title: 'title1',
    city: 'Гродно',
    rooms: 'rooms1',
    price: '1',
  },
  {
    id: '2',
    img: '/tmp.jpg',
    title: 'title2',
    city: 'Минск',
    rooms: 'rooms2',
    price: '2',
  },
  {
    id: '3',
    img: '/tmp.jpg',
    title: 'titlу3',
    city: 'city3',
    rooms: 'rooms3',
    price: '3',
  },
];

export default {
  getCities,
  getRentalTypes,
  getFlats,
};