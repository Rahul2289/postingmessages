import React from "react";

const Input = ({ handleSubmit, handleChange, text }) => {
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleChange}
          value={text}
          className="text-input"
          placeholder="write something here.."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Input;
