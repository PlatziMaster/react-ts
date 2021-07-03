import { useRef } from 'react';
import Button from "./Button";

const FilterButton = () => {

  const handleClick = (event, position) => {
    console.log(event);
    console.log(position);
  }

  const handleClick2 = (event) => {
    console.log(event);
  }

  return (
    <div>
      <Button sendPosition={true} title="Filtro" handleClick={handleClick}></Button>
      <Button sendPosition={false} title="Filtro 2" handleClick={handleClick}></Button>
      <div>
        <h1></h1>
      </div>
    </div>
  );
}

export default FilterButton;