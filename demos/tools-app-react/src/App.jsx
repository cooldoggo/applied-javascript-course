import { CarTool } from './components/CarTool';
import { ColorTool } from './components/ColorTool';



const carList = [
  { id: 1, make: 'Mazda', model: '3', year: 2024, color: 'Blue', price: 30},
  { id: 2, make: 'Toyata', model: '4', year: 2004, color: 'Red', price: 10},
];




function App() {

  return (
   <>
      <ColorTool />
      <CarTool cars={carList}/>
  
   </>
  
  );
}

export default App
