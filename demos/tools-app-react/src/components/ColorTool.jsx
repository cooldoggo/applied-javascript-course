
import { useCallback, useState, useEffect } from 'react';

import { ColorsHttpData } from '../services/colorsHttpData';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';


const colorsData = new ColorsHttpData("/api");



export function ColorTool() {

  const [ colors, setColors ] = useState([]);

  const refreshColors = useCallback(async () => {
    setColors(await colorsData.all());

  }, []);

  // const addColor = useCallback(newColor => {

  //   // setColors will update the colors array and re-render
  //   setColors([ // the square brackets create a new array object
  //     ...colors, // copy the elements from the original array to the new array
  //     { // the curly braces will create a new object
  //       ...newColor, // copy the properties from the colorForm to the new object
  //       // get the max id in the colors array, and incremebt by 1
  //       id: Math.max(...colors.map(c => c.id), 0) + 1,
  //     },

  //   ]);
  // }, [colors]);

  const addColor = useCallback(async newColor => {
    await colorsData.append(newColor);
    await refreshColors();
  }, [refreshColors])

  // this will run one-time after the initial render
  // to unitially load the colors
  useEffect(() => {
    refreshColors();
  }, [refreshColors]);


  // props and anything accessed through props is immutable
  

  return (
    <>
      <ToolHeader headerText={"Color Tool"}/>
      <ColorList colors={colors}/>
      <ColorForm onSubmitColor={addColor} />
    </>
    
  );
}