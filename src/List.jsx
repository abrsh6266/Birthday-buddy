import { Person } from './Person';
import React, { useState } from "react";
import data from './data'
const List = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h2>{people.length} birthdays today</h2>
      {people.map((p) => {
        return (
          <Person   p={p} />
        );
      })}
    </div>
  );
};

export default List;
