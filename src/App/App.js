import React, { Component } from 'react';
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='reservation-form'>

        </div>
        <div className='reservation-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
