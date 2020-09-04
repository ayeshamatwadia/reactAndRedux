import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // for optimizations purposes give the looped components a key
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card key={i} id={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
};

export default CardList;
