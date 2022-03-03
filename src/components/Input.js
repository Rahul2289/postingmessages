import React from "react";

const Input = ({ handleSubmit, handleChange, text }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default Input;
