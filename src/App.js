import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import { List } from "./components/List";
import GiftList from "./components/GiftList";
import GifBoxIcon from "@mui/icons-material/GifBox";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [style, setStyle] = useState(true);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [gift, setGift] = useState("");

  const ApiKey = "BnB60B1zI4Hr99UlTRRpBrMEn97ECvmz";

  /* Fetching All Gif with limit of 10*/
  const fectchgif = async (title) => {
    const response = await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${ApiKey}&limit=8`
      )
      .then((res) => setData(res.data.data));
    console.log(response);
  };

  /* Fetching Single Gif with an id which get by clicking on a selected gift*/
  /*ID will get from child component */

  const fectchSingleGif = async (id) => {
    const response = await axios
      .get(`https://api.giphy.com/v1/gifs/${id}?api_key=${ApiKey}`)
      .then((res) => setGift(res.data.data.images.fixed_width.url));
    console.log(response);
  };

  useEffect(() => {
    fectchgif(title);
    fectchSingleGif(id);
  }, [title, id]);

  //handling text input value
  const handleChange = (e) => {
    setText(e.target.value);
  };

  //Submiting Post
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = [...message, text];
    setMessage(newMessage);
    setText("");
    setTitle("");
  };

  //Changing style
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
        style={style}
        changestyle={changestyle}
      />
      <div className="gift-container">
        <button onClick={changestyle} className="gift-button">
          <GifBoxIcon fontSize="large" />
        </button>
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
      <GiftList data={data} style={style} setId={setId} />
      <List message={message} gift={gift} />
    </div>
  );
}

export default App;
