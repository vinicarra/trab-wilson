import { render } from "react-dom";
import "./index.scss";

import { App } from "./screens/App/App";

const app = document.getElementById("app");
render(<App />, app);
