import { List } from './List';
import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h2>{people.length} birthdays today</h2>
      {people.map((p) => {
        const { id, name, image, age } = p;
        return <List id={id} image={image} name={name} age={age}  />;
      })}
    </div>
  );
};
export default App;
