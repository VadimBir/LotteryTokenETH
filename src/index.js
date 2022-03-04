
import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from './App';
import AppAuth from './AppAuth'

ReactDOM.render(
  <MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
    <AppAuth />
  </MoralisProvider>,
  document.getElementById("aboveRoot"),
);

ReactDOM.render(
  <MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);
