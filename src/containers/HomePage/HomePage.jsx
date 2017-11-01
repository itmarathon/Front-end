import React, { Component } from 'react';
import {
  Filtres,
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
    filtres: {
      city: '',
    },
    data: {
      flats: mockFlats,
    },
  }

  handlerFiltersChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const { filtres } = this.state;

    filtres[fieldName] = fieldValue;
    this.setState({ filtres });
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
    let filtredFlats = this.state.data.flats;
    filtredFlats = mockFlats.filter(flat => flat.city.includes(this.state.filtres.city));
    const { data } = this.state;
    data.flats = filtredFlats;
    this.setState({ data });
  }

  render() {
    return (
      <div className="HomePage">
        <Filtres
          city={this.state.filtres.city}
          onChange={this.handlerFiltersChange}
          onSubmit={this.handleFilterSubmit}
        />
        <FlatList flats={this.state.data.flats} />
      </div>
    );
  }
}

export default HomePage;