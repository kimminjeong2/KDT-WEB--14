import React, { Component } from "react";

export default class Pr1 extends Component {
  state = {
    number: 0,
  };
  render() {
    // state는 this.state로 접근 가능
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
