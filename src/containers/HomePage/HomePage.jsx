import React, { Component } from 'react';
import {
  Filters,
  FlatList,
} from '../../components';

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
    },
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
          city={this.state.filters.city}
          type={this.state.filters.type}
          rooms={this.state.filters.rooms}
          price={this.state.filters.sort}
          sort={this.state.filters.sort}
          onChange={this.handlerFiltersChange}
          onSubmit={this.handleFilterSubmit}
        />
        <FlatList flats={this.state.data.flats} />
      </div>
    );
  }
}

export default HomePage;