import React from "react";

export const List = ({ message }) => {
  return (
    <div>
      {message.map((item, i) => {
        return (
          <div key={i} className="box">
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};
