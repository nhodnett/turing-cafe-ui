import React, { Component } from 'react';
import Reservations from '../components/Reservations';
import Form from '../components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }

  }

  componentDidMount = () => {
    console.log('Did Mount')
    fetch(`http://localhost:3001/api/v1/reservations`)
    .then(response => response.json())
    .then(reservations => this.setState({ reservations }))
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='reservations-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='reservations-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
