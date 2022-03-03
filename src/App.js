import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import { List } from "./components/List";
import GiftList from "./components/GiftList";

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
      <GiftList data={data} style={style} />
      <List message={message} />
    </div>
  );
}

export default App;
