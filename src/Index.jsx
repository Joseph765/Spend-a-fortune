import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import AppContextProvider from "./context/AppContextProvider.jsx";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("app")
);
