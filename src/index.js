import ReactDOM from "react-dom/client";
import { App } from "./App";

/** DOM Element for React to attatch to (must already exist within index.html)  */
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app)
root.render(<App />)