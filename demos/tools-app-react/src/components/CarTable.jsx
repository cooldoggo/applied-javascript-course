import { useCallback } from 'react';
import { CarViewRow } from './CarViewRow';

export function CarTable({ cars, onDeleteCar: deleteCar }) {

  // const deleteCar = useCallback((carId) => {
  //   onDeleteCar(carId);
  // }, [onDeleteCar]);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>          
      <tbody>
      {cars.map(car => (
        <CarViewRow key={car.id} car={car}
          onDeleteCar={deleteCar} />
      ))}
      </tbody>
    </table>
  );

}