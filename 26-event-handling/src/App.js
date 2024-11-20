import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Ex4 from "./Ex4";

function App() {
  return (
    <div className="App">
      {/* 합성 이벤트 */}
      <SyntheticEvent />
      <hr />
      {/* 클래스형 컴포넌트 */}
      <ClassBind />
      <hr />
      {/* 함수형 컴포넌트 */}
      <Counter />

      {/* 실습 */}
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
    </div>
  );
}

export default App;
