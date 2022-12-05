import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Clock from './Clock';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello World!!!</h1>);

// setInterval(() => {
//   root.render(<Clock />);
// }, 1000);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
