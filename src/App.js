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
        `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${ApiKey}&limit=8`
      )
      .then((res) => setData(res.data.data));
    console.log(response);
  };

  // const fectchSingleGif = async () => {
  //   const response1 = await axios
  //     .get(`https://api.giphy.com/v1/gifs/3o7ZeQBhbVGnELP4bK&api_key=${ApiKey}`)
  //     .then((res) => console.log(res));
  // };

  useEffect(() => {
    fectchgif(title);
  }, [title]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = [...message, text];
    if (text.length > 0) {
      setMessage(newMessage);
    }
    setText("");
  };
  const changestyle = () => {
    setStyle(!style);
  };
  return (
    <div className="App">
      <h2>Post Message</h2>
      <Input
        handleChange={handleChange}
        text={text}
        handleSubmit={handleSubmit}
      />
      <div className="gift-container">
        <button onClick={changestyle}>Gift</button>
        <input
          type="text"
          placeholder="search for the gift here!"
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
