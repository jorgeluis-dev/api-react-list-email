import React from 'react';

import axios from 'axios';
import '../Screens/Login/styles.css';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://6249fa3efd7e30c51c0960f3.mockapi.io/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>EMAIL: {
        [person.email].map(email => <p>{email}</p>)

        }</li>)}
      </ul>
    )
  }
}