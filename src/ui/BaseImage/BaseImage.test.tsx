import React from "react";
import { render } from "@testing-library/react";
import { ThemePicker } from "vcc-ui";
import { BaseImage } from "./BaseImage";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

test("renders learn react link", () => {
  const renderer = createRenderer();
  const fakeSrc = "http://localhost/some/src/img.jpg";
  const altValue = "description of the image";

  const ImgComponent = render(
    <RendererProvider renderer={renderer}>
      <ThemePicker variant="light">
        <BaseImage src={fakeSrc} alt={altValue} />
      </ThemePicker>
    </RendererProvider>
  );

  const imgWithAlt = ImgComponent.getByAltText("description of the image");

  expect(imgWithAlt).toBeInTheDocument();
  expect(imgWithAlt).toHaveProperty("src", "http://localhost/some/src/img.jpg");
});
