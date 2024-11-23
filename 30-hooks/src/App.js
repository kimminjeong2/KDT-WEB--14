import "./App.css";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallback2 from "./components/UseCallback2";
import Pr1 from "./components/Pr1";

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx1 />
      <hr />

      <UseCallback2 postId={9} />
      <hr />

      <Pr1 />
    </div>
  );
}

export default App;
