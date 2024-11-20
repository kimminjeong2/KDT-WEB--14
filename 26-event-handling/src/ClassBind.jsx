import React, { Component } from "react";

export default class ClassBind extends Component {
  state = {
    name: "codingon",
  };
  printConsole = () => {
    console.log("this", this); // 현재 컴포넌트
    console.log("name", this.state.name);
  };
  printConsole2() {
    console.log("this", this);
  }

  // 인자 전달하는 경우
  printconsole3 = (msg) => {
    console.log(msg);
  };

  // 인자 전달 + 이벤트 객체 사용하는 경우
  printconsole4 = (e, msg) => {
    console.log(e);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자x)</button>
        <button onClick={this.printConsole2.bind(this)}>
          printConsole2(인자x)
        </button>
        <button onClick={() => this.printconsole3("안녕")}>
          printconsole(인자o)
        </button>
        <button onClick={(e) => this.printconsole4(e, "안녕")}>
          printconsole(인자o)
        </button>
      </div>
    );
  }
}
