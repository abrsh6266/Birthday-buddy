import React from "react";
export function Person({p}) {
  return <div key={p.id}>
            <img src={p.image} className="img" alt={p.name} style={{
      width: 100
    }} />
            <h3>{p.name}</h3>
            <h4>{p.age} years</h4>
          </div>;
}
  