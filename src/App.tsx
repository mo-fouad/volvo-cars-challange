import React, { useEffect, useState } from "react";
import { CarCard } from "components";
import { Car } from "./types";
import { getCarouselCars } from "./services";
import {
  Grid,
  Row,
  useTheme,
  Spinner,
  TabNav,
  TabNavItem,
  Text,
  View,
} from "vcc-ui";
import { CarCarousel } from "components/CarCarousel/CarCarousel";

function App() {
  const { color } = useTheme();
  const [carouselCars, setCarouselCars] = useState<Car[]>([]);
  const [updatedCars, setUpdatedCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = React.useState(0);
  const uniqueBodyTypes = [
    ...new Set(carouselCars.map((item) => item.bodyType)),
  ];

  // Fetch Cars API
  useEffect(() => {
    const getCarsData = async () => {
      const result: Car[] = await getCarouselCars();
      if (result) {
        setLoading(false);
        setCarouselCars(result);
        setUpdatedCars(result);
      }
    };

    getCarsData();
  }, []);

  const filterBy = (index: number, value: string) => {
    setActive(index);

    if (value === "all") {
      setUpdatedCars(carouselCars);
      return;
    }

    const filteredCars = carouselCars.filter((obj) => {
      return obj.bodyType === value;
    });

    setUpdatedCars(filteredCars);
  };

  return (
    <main>
      <Grid>
        <View extend={{ padding: "16px 0" }}>
          <Text as={"h1"} variant="hillary">
            Volvo Cars App
          </Text>
        </View>
        <Row>
          {uniqueBodyTypes && (
            <TabNav role="navigation" enableLineTransition>
              <TabNavItem
                role="button"
                aria-pressed="false"
                isActive={active === 0}
                onClick={() => {
                  filterBy(0, "all");
                }}
              >
                all
              </TabNavItem>
              {uniqueBodyTypes.map((bodyType: string, index: number) => (
                <TabNavItem
                  role="button"
                  aria-pressed="false"
                  key={index}
                  isActive={active === index + 1}
                  onClick={() => {
                    filterBy(index + 1, bodyType);
                  }}
                >
                  {bodyType}
                </TabNavItem>
              ))}
            </TabNav>
          )}
        </Row>
        <Row align="center">
          {loading && <Spinner size={30} color={color.foreground.action} />}

          {updatedCars.length > 0 && (
            <CarCarousel>
              {updatedCars.map((car: Car) => (
                <CarCard key={car.id} carData={car} />
              ))}
            </CarCarousel>
          )}
        </Row>
      </Grid>
    </main>
  );
}

export default App;
