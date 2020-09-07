import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {

  // you can test the error boundary with the below code
  // note however that it won't show in development mode
  // as development mode will give you a full stack trace 


  // if(true) {
  //   throw new Error('There was an error');
  // }
  
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
