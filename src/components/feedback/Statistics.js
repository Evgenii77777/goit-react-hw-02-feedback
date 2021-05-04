import React from "react";

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <span>Good:{good} </span>
      <span>Neutral:{neutral} </span>
      <span>Bad:{bad} </span>
      <p>Total:{total}</p>
      <p>Positive feedback:{positive}%</p>
    </>
  );
};

export default Statistics;
