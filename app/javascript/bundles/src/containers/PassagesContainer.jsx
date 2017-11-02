import React from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PassageSummary } from '../components/PassageSummary';

export class PassagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { passages: this.props.passages };
  }

  // addNewPassage = () => {
  //   axios.post(
  //     'http://localhost:3001/api/v1/passages',
  //     { passage:
  //       {
  //         departure_port: '',
  //         departure_date: '',
  //         arrival_port: '',
  //         arrival_date: '',
  //         description: '',
  //         miles: '',
  //         hours: '',
  //         night_hours: '',
  //         role: '',
  //         overnight: '',
  //         tidal: '',
  //         ocean_passage: ''
  //       }
  //     }
  //   )
  //   .then(response => {
  //     console.log(response)
  //     const passages = update(this.state.passages, {
  //       $splice: [[0, 0, response.data]]
  //     })
  //     this.setState({passages: passages})
  //   })
  //   .catch(error => console.log(error))
  // }

  render() {
    return (
      <div className="passages-container">
        <p><Link to="/passages/new">Log a passage</Link></p>
        {this.state.passages.map((passage) => {
          return <PassageSummary passage={passage} key={passage.id} />
        })}
      </div>
    )
  }
}
