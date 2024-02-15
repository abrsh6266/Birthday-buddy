import React from "react";
export function Person({p}) {
  return <div key={p.id} className="person">
            <img src={p.image} className="img" alt={p.name}/>
            <div>
            <h4>{p.name}</h4>
            <p>{p.age} years</p>
            </div>
          </div>;
}
  