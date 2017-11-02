import React from 'react';
import moment from 'moment';

export class PassageSummary extends React.Component {
  render() {
    const passage = this.props.passage;
    return (
      <div style={divStyle}>
        <div>
          <p>{passage.departure_port}</p>
          <p style={dateStyle}>{moment(passage.departure_date).format('Do MMMM YYYY')}</p>
        </div>
        <div style={arrowRightContainer}>
          <img src={arrowRight} style={arrowRightStyle} />
        </div>
        <div>
          <p>{passage.arrival_port}</p>
          <p style={dateStyle}>{moment(passage.arrival_date).format('Do MMMM YYYY')}</p>
        </div>
      </div>
    )
  }
}

const divStyle = {
  backgroundColor: "#001F41",
  padding: "15px",
  marginBottom: 10,
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center"
}

const dateStyle = {
  fontSize: 14
}

const arrowRight = require('../images/arrow-right.svg');

const arrowRightStyle = {
  maxWidth: 20,
  maxHeight: 20
}

const arrowRightContainer = {
  display: "flex",
  alignItems: "center"
}
