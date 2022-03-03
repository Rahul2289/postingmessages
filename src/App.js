import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [style, setStyle] = useState(true);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const ApiKey = "BnB60B1zI4Hr99UlTRRpBrMEn97ECvmz";
  const fectchgif = async (title) => {
    const response = await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${ApiKey}&limit=10`
      )
      .then((res) => setData(res.data.data));
    console.log(response);
  };

  useEffect(() => {
    fectchgif(title);
  }, [title]);

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
      <div className="gift-container">
        <h5 onClick={changestyle}>Gift</h5>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={style ? "none" : "block"}
        />
      </div>
      {data.map((gift) => {
        return (
          <div key={gift.id} className={style ? "none" : "block"}>
            <img src={gift.images.fixed_width.url} alt={gift.title} />
          </div>
        );
      })}
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
        return (
          <div key={i} className="box">
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};
