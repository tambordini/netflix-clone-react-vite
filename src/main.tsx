import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/global.css";

ReactDOM.createRoot(
  document.getElementById("netflix-clone") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
