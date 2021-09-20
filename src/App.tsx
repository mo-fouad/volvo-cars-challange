import React, { useEffect, useState } from "react";
import { CarCard } from "./components/CarCard";
import { Car } from "./types";
import { getCarouselCars } from "./services";

function App() {
  const [carouselCars, setCarouselCars] = useState<Car[]>([]);

  // Fetch CArs API
  useEffect(() => {
    const getCarsData = async () => {
      const result: Car[] = await getCarouselCars();
      setCarouselCars(result);
    };

    getCarsData();
  }, []);

  return (
    <div>
      <header>Slider App Ho</header>
      {carouselCars &&
        carouselCars.map((car: Car) => <CarCard key={car.id} carData={car} />)}
    </div>
  );
}

export default App;
