import "./App.css";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallback2 from "./components/UseCallback2";
import Pr1 from "./components/Pr1";
import Pr2 from "./components/Pr2";
import UseReducerEx from "./components/UseReducerEx";
import Faq from "./components/Faq";
import Form from "./components/Form";
import Pr3 from "./components/Pr3";

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
      <hr />

      <Pr2 />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
      <hr />

      <Form />
      <hr />

      <Pr3 />
    </div>
  );
}

export default App;
