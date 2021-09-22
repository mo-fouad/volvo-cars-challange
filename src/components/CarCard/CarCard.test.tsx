import React from "react";
import { render } from "@testing-library/react";
import { ThemePicker } from "vcc-ui";
import { CarCard } from "./CarCard";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

test("renders learn react link", () => {
  const renderer = createRenderer();
  const CardData = {
    id: "xc90-recharge",
    modelName: "XC90 Recharge",
    bodyType: "suv",
    modelType: "plug-in hybrid",
    imageUrl: "http://localhost/images/xc90_recharge.jpg",
  };
  const CardComponent = render(
    <RendererProvider renderer={renderer}>
      <ThemePicker variant="light">
        <CarCard key={CardData.id} carData={CardData} />
      </ThemePicker>
    </RendererProvider>
  );

  // find Name of the car
  const CarName = CardComponent.getByLabelText("car name");
  const bodyType = CardComponent.getByLabelText("car body type");
  const modelType = CardComponent.getByLabelText("car model type");
  const cardImg = CardComponent.getByAltText("XC90 Recharge");

  const learnLink = CardComponent.getByText("LEARN");
  const shopLink = CardComponent.getByText("SHOP");

  expect(CarName).toHaveTextContent(CardData.modelName);
  expect(bodyType).toHaveTextContent(CardData.bodyType);
  expect(modelType).toHaveTextContent(CardData.modelType);
  expect(cardImg).toBeInTheDocument();
  expect(cardImg).toHaveProperty("src", CardData.imageUrl);
  expect(learnLink).toBeInTheDocument();
  expect(shopLink).toBeInTheDocument();

  expect(learnLink).toHaveProperty(
    "href",
    `http://localhost/${CardData.id}/learn`
  );
  expect(shopLink).toHaveProperty(
    "href",
    `http://localhost/${CardData.id}/shop`
  );
});
