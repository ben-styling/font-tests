import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gray-100 py-10 text-midnightBlue">
      <div className="max-w-xs shadow-lg mx-auto bg-white">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
