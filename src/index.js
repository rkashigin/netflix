import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

import "normalize.css";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
