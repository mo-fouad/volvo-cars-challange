import { Car } from "types";

export async function getCarouselCars(): Promise<Car[]> {
  const CarsData = await fetch("/api/cars.json").then((res) => res.json());
  return CarsData;
}
