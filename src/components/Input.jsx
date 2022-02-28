import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { isPassword: true, count: 9 };
  }

  toggleInput = () => {
    this.setState((state) => ({ ...state, isPassword: !state.isPassword }));
  };

  increment = () => {
    this.setState((state) => ({ ...state, count: state.count + 1 }));
  };

  render() {
    const { isPassword, count } = this.state;
    return (
      <>
        <input type={isPassword ? "password" : "text"} />
        <button onClick={this.toggleInput}>Change input</button>
        {isPassword && <p>Visible!</p>}
        <h1>{count}</h1>
        <button onClick={this.increment} disabled={count === 10}>
          increment
        </button>
      </>
    );
  }
}

export default Input;
