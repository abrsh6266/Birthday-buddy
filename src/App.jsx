import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h2>{people.length} birthdays today</h2>
      {people.map((p) => {
        const { id, name, image, age } = p;
        return <div key={id}>
          <img src={image} className='img' alt={name} style={{width:100}}/>
          <h3>{name}</h3>
          <h4>{age} years</h4>
        </div>;
      })}
    </div>
  );
};
export default App;
