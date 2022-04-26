import "./App.css";
import Ide from "./Editor/Ide";
import Question from "./Question";

import SplitPane from "react-split-pane";

function App() {
  return (
    <div className="App">
      <div className="top-header"></div>
      <div className="split">
        <SplitPane
          style={{ height: "100%", position: "relative" }}
          defaultSize="50%"
        >
          <Question />
          <Ide />
        </SplitPane>
      </div>
    </div>
  );
}
export default App;
