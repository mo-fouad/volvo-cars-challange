import React, { useEffect, useState } from "react";
import { CarCard } from "./components/CarCard";
import { Car } from "./types";
import { getCarouselCars } from "./services";
import { Grid, Row, useTheme, Spinner } from "vcc-ui";

function App() {
  const [carouselCars, setCarouselCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const { color } = useTheme();

  // Fetch CArs API
  useEffect(() => {
    const getCarsData = async () => {
      const result: Car[] = await getCarouselCars();
      if (result) {
        setLoading(false);
        setCarouselCars(result);
      }
    };

    getCarsData();
  }, []);

  return (
    <Grid>
      <Row align="center">
        {loading && <Spinner size={30} color={color.foreground.action} />}
        {carouselCars &&
          carouselCars.map((car: Car) => (
            <CarCard key={car.id} carData={car} />
          ))}
      </Row>
    </Grid>
  );
}

export default App;
