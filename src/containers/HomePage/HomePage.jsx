import React, { Component } from 'react';
import {
  Filters,
  FlatList,
} from '../../components';

import Api from '../../services/api';

const mockFlats = [
  {
    id: '1',
    img: '/tmp.jpg',
    title: 'title1',
    city: 'city1',
    rooms: 'rooms1',
    price: '1',
  },
  {
    id: '2',
    img: '/tmp.jpg',
    title: 'title2',
    city: 'city2',
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

class HomePage extends Component {
  state = {
    filters: {
      city: '',
    },
    data: {
      flats: mockFlats,
      cities: [],
      types: [],
    },
  }

  async componentWillMount() {
    const { data } = this.state;

    const cities = await Api.getCities();
    const types = await Api.getTypes();

    data.cities = cities;
    data.types = types;
    this.setState({ data });
  }

  handlerFiltersChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const { filters } = this.state;

    filters[fieldName] = fieldValue;
    this.setState({ filters });
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
    let filtredFlats = this.state.data.flats;
    filtredFlats = mockFlats.filter(flat => flat.city.includes(this.state.filters.city));
    const { data } = this.state;
    data.flats = filtredFlats;
    this.setState({ data });
  }

  render() {
    return (
      <div className="HomePage">
        <Filters
          cities={this.state.data.cities}
          types={this.state.data.types}
          onChange={this.handlerFiltersChange}
          onSubmit={this.handleFilterSubmit}
        />
        <FlatList flats={this.state.data.flats} />
      </div>
    );
  }
}

export default HomePage;