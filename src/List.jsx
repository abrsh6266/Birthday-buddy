import { Person } from "./Person";
import React, { useState } from "react";
import data from "./data";
const List = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h3>{people.length} birthdays today</h3>
      {people.map((p) => {
        return <Person p={p} />;
      })}
      <button
        onClick={() => setPeople([])}
        className="btn btn-block"
        style={{ background: "grey" }}
      >
        Clear All
      </button>
    </div>
  );
};

export default List;
