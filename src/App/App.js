import React, { Component } from 'react';
import Reservations from '../components/Reservations';
import Form from '../components/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }

  }

  componentDidMount = () => {
    console.log('Did Mount')
    fetch(`http://localhost:3001/api/v1/reservations`)
    .then(response => response.json())
    .then(reservations => this.setState({ reservations }))
    .catch(error => {
      this.setState({ error: error.message })
    })
  }

  postReservation = (newReservation) => {
    console.log('Did Post')
    fetch(`http://localhost:3001/api/v1/reservations`, {
      method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .catch(error => {
      this.setState({ error: error.message })
    })
  }

  addReservation = (newReservation) => {
    this.postReservation(newReservation)
    this.setState({ reservations: [...this.state.reservations, newReservation] })
  }

  cancelReservation = (id) => {
    console.log('Cancelled', id)
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, { method: 'DELETE' })
    .then(() => {
      const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id)
      this.setState({ reservations: filteredReservations })
  })

}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='reservations-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='reservations-container'>
          <Reservations reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
