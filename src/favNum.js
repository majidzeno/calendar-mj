import React, { Component } from "react";

export class favNum extends Component {
  static defaultProps = { min: 1, max: 9 };
  state = {
    number: 0,
    numberEntered: false
  };
  handleChange = event => {
    this.setState({
      numberEntered: true,
      number: Number(event.target.value)
    });
  };
  render() {
    const { number, numberEntered } = this.state;
    const { min, max } = this.props;
    const isValid = !numberEntered || (number >= min && number <= max);
    return (
      <div>
        <label htmlFor="favourite-number">Favourite Number </label>
        <input
          type="number"
          id="favourite-number"
          value={number}
          onChange={this.handleChange}
        />
        {isValid ? // <h1 data-testid="flag">Valid Number </h1>
        null : (
          <div data-testid="error-message">This Number is invalid!</div>
        )}
      </div>
    );
  }
}

export default favNum;
