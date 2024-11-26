import "./styles/App.css";
import CssModuleComponent from "./CssModuleComponent";
import SassComponent from "./Sasscomponent";
import Pr12 from "./Pr12";
import Pr13 from "./Pr13";
import StyledComponent from "./StyledComponent";
import Pr14 from "./Pr14";

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent />

      <h2>SASS</h2>
      <SassComponent />
      <hr />

      {/* <Pr12 /> */}
      <hr />

      {/* <Pr13 /> */}

      <StyledComponent />
      <hr />

      <Pr14 />
    </div>
  );
}

export default App;
