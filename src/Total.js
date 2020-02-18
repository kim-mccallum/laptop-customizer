import React, { Component } from 'react';
import './App.css';

class Total extends Component {
  render() {
    const total = Object.keys(this.props.selectedFeatures).reduce(
        (acc, curr) => acc + this.props.selectedFeatures[curr].cost,
        0
      );
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
            {this.props.USCurrencyFormat.format(total)}
            </div>
        </div>
    );
  }
}

export default Total;