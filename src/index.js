import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./Components/simpleHabit.jsx";

ReactDOM.render(
  <SimpleHabit>
    <App />
  </SimpleHabit>,
  document.getElementById("root")
);
