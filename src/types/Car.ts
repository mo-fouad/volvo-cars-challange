export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface CardType {
  key: string;
  carData: Car;
}
