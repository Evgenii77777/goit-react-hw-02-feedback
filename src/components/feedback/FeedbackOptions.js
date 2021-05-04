import React from "react";

const FeedbackOptions = ({ handleIncr }) => {
  return (
    <>
      <button type="button" name="good" onClick={handleIncr}>
        Good
      </button>
      <button type="button" name="neutral" onClick={handleIncr}>
        Neytral
      </button>
      <button type="button" name="bad" onClick={handleIncr}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
