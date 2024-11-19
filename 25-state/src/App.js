import Counter from "./Counter";
import SayFunction from "./SayFunction";
import Pr1 from "./Pr1";
import Pr2 from "./Pr2";

function App() {
  return (
    <div className="App">
      {/* 클래스형 state */}
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <Pr1 />
      <hr />

      <Pr2 />
    </div>
  );
}

export default App;
