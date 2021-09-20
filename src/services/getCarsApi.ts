import { Car } from "types";

export async function getCarouselCars(): Promise<Car[]> {
  return (await fetch("/api/cars.json")).json();
}
