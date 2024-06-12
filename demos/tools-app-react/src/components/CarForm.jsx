import { useState, useCallback } from 'react';

export function CarForm( { onSubmitCar }) {

  const [ carForm, setCarForm ] = useState({ make: '', model: '', year: '', color: '', price: '' });
   
  const change = useCallback(e => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.value
    });
  }, [carForm]);

  const submitCar = useCallback(() => {
    onSubmitCar({ ...carForm });
    setCarForm({make: '', model:'', year:'', color:'' , price: ''});
  }, [carForm, onSubmitCar]);
  
  return (
    <form>
      <label>
        Make:
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model" value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="text" name="year" value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={carForm.price} onChange={change} />
      </label>
      <button type = "button" onClick={submitCar}>Add Car</button>
    </form>
  );


}