import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [style, setStyle] = useState(true);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = [...message, text];
    setMessage(newMessage);
    setText("");
  };
  const changestyle = () => {
    console.log("clicked");
    setStyle(!style);
  };
  return (
    <div className="App">
      <Input
        handleChange={handleChange}
        text={text}
        handleSubmit={handleSubmit}
      />
      <div>
        <h5 onClick={changestyle}>gift</h5>
        <input type="text" className={style ? "none" : "block"} />
      </div>
      <List message={message} />
    </div>
  );
}

export default App;

export const Input = ({ handleSubmit, handleChange, text }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export const List = ({ message }) => {
  return (
    <div>
      {message.map((item, i) => {
        return <h1 key={i}>{item}</h1>;
      })}
    </div>
  );
};
