import { useState, useCallback } from 'react';

export function ColorForm( { onSubmitColor }) {

  const [ colorForm, setColorForm ] = useState({ name: '', hexcode: '' });
   
  const change = useCallback(e => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value
    });
  }, [colorForm]);

  const submitColor = useCallback(() => {

    // call the addColor function
    onSubmitColor({ ...colorForm });
    setColorForm({ name: '', hexcode: ''});
  }, [colorForm, onSubmitColor]);
  
  return (
    <form>
      <label>
        Name:
        {/* Step 3 value ="red" */ }
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        {/* Step 3 value ="ff" */ }
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>Add Color</button>
    </form>
  );


}


// import { useState, useCallback } from 'react';

// export function ColorForm() {

//   const initialColorForm = { name: '', hexcode: '' };
  
//   // Step 2: { name: 'red', hexcode: 'ff' }
//   const colorFormState = useState(initialColorForm);

//   const colorForm = colorFormState[0]; // first element of array/tuple is the form data
  
//   // Step 1: setColorForm({ name: 'red', hexcode: 'ff' }) => re-render of the component
//   const setColorForm = colorFormState[1]; // second element of the array/tuple is the update function for the form data

//   const change = useCallback(e => {

//     const inputElement = e.target;
//     const inputValue = inputElement.value; // use typed in
//     const inputName = inputElement.name; // name of the property being update

//     const newColorForm = {
//       name: colorForm.name,
//       hexcode: colorForm.hexcode,
//     };

//     // update name or hexcode based on the input element typed into
//     newColorForm[inputName] = inputValue;
//     // newColorForm["name"] = inputValue;
//     // newColorForm["hexcode"] = inputValue;

//     // update the state and trigger the re-render
//     setColorForm(newColorForm);

//   }, [colorForm, setColorForm]);

//   console.log(colorForm);
  
//   return (
//     <form>
//       <label>
//         Name:
//         {/* Step 3 value ="red" */ }
//         <input type="text" name="name" value={colorForm.name} onChange={change} />
//       </label>
//       <label>
//         Hexcode:
//         {/* Step 3 value ="ff" */ }
//         <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
//       </label>
//       <button>Add Color</button>
//     </form>
//   );


// }