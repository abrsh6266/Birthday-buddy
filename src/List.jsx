import React from "react";
export function List({
  id,
  image,
  name,
  age
}) {
  return <div key={id}>
          <img src={image} className='img' alt={name} style={{
      width: 100
    }} />
          <h3>{name}</h3>
          <h4>{age} years</h4>
        </div>;
}
  