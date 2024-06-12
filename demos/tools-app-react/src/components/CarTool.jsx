import { useCallback, useState, useEffect } from "react";

import { CarsHttpData } from '../services/carsHttpData';
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

const carsData = new CarsHttpData("/api");

export function CarTool() {

  const [ cars, setCars ] = useState([]);

  const refreshCars = useCallback(async () => {
    setCars(await carsData.all());
  }, []);

  const addCar = useCallback(async newCar => {
    await carsData.append(newCar);
    await refreshCars();
  }, [refreshCars]);

  const deleteCar = useCallback(async carId => {
    await carsData.remove(carId);
    await refreshCars();
  }, [refreshCars]);

  useEffect(() => {
    refreshCars();
  }, [refreshCars]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <CarForm onSubmitCar={addCar} />
    </>
  );

}