import React, { Component } from "react";

export default class Ex1 extends Component {
  state = {
    msg: "Hello World!",
  };
  print = (e, msg) => {
    this.setState({ msg: msg });
  };
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={(e) => this.print(e, "Goodbye World!")}>클릭</button>
      </div>
    );
  }
}

// 답안

// import React, { Component } from 'react';

// class Ex extends Component {
//   state = {
//     message: 'Hello World!',
//   };

//   onClick = () => {
//     this.setState({
//       message: 'Goodbye World!',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//         <br />
//         <button onClick={this.onClick}>클릭</button>
//       </div>
//     );
//   }
// }

// export default Ex;
