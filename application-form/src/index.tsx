import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Buttons } from "./pages/buttons";
import { TextBoxes } from "./pages/textBoxes";
import { Select } from "./pages/select";
import { Checkbox } from "./pages/checkbox";
import { Slider } from "./pages/slider";
import { Radio } from "./pages/radio";
import { Calander } from "./pages/calander";

ReactDOM.render(
  <App>
    <h1>Form Basic Elements</h1>
    <hr />
    <table style={{ marginLeft: "130px", marginTop: "50px" }}>
      <tr>
        <th>
          <h1>Element</h1>
        </th>
        <th className="elementName">
          <h1>Demo</h1>
        </th>
      </tr>
      <tr>
        <Buttons />
      </tr>
      <tr>
        <TextBoxes />
      </tr>
      <tr>
        <Select />
      </tr>
      <tr>
        <Checkbox />
      </tr>
      <tr>
        <Slider />
      </tr>
      <tr>
        <Radio />
      </tr>
      <tr>
        <Calander />
      </tr>
    </table>
  </App>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
