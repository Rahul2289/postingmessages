import React from "react";

// Textinput and post button

const Input = ({ handleSubmit, handleChange, text, changestyle }) => {
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
        <button className="post-button" type="submit" onClick={changestyle}>
          Post
        </button>
      </form>
    </div>
  );
};

export default Input;
