import React from "react";
import { render } from "@testing-library/react";
import { ThemePicker } from "vcc-ui";
import App from "./App";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

test("renders learn react link", () => {
  const renderer = createRenderer();
  const AppComponent = render(
    <RendererProvider renderer={renderer}>
      <ThemePicker variant="light">
        <App />
      </ThemePicker>
    </RendererProvider>
  );

  const titleElement = AppComponent.getByText(/Volvo Cars App/i);
  const navElement = AppComponent.getByText("all");

  expect(titleElement).toBeInTheDocument();
  expect(navElement).toBeInTheDocument();
});
