



export function ToolHeader({ headerText }) {

  // destructuring - the name of the variable must match the name of the property
  // const { headerText } = props;

  

  return (
    <header>
        <h1>{headerText}</h1>
      </header>
    
  );
}