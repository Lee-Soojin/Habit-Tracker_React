import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./Components/simpleHabit.jsx";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
