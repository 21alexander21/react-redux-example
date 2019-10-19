import React from "react";
import ReactDOM from "react-dom";
import "./globalStyles.css";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import { Provider } from "react-redux";
import { App } from "./modules/app";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const store = configureStore();
const theme = createMuiTheme();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
