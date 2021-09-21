/*
Adding support For IE11 since it still in use for around 0.5%
https://gs.statcounter.com/browser-market-share
*/

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { styleRenderer, StyleProvider, ThemePicker } from "vcc-ui";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { getFavIcons } from "@volvo-cars/favicons";

const renderer = styleRenderer();

renderer.renderStatic(
  {
    outline: 0,
  },
  "a"
);

const favIcons = getFavIcons();

ReactDOM.render(
  <StyleProvider renderer={renderer}>
    <ThemePicker variant="light">
      <Helmet>
        <title>Volvo Cars Application</title>
        <meta
          name="description"
          content="Volvo Cars Application to show the latest rechargeable cars"
        />
        <meta name="theme-color" content="#rgb(28 107 186)" />
        {favIcons.map((icon, id) => (
          <link key={`icon-${id}`} {...icon} />
        ))}
      </Helmet>
      <App />
    </ThemePicker>
  </StyleProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
