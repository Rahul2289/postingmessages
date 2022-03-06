import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//Displaying the Posts with the Gift and message

export const List = ({ message, gift }) => {
  return (
    <div className="message-container">
      {message.map((message, i) => {
        return (
          <div key={i} className="box">
            <div className="profile">
              <AccountCircleIcon fontSize="large" />
              <h3 className="profile-name">Rahul</h3>
            </div>
            <h3 className="message-text">{message}</h3>
            {gift ? <img className="image" src={gift} alt={gift} /> : ""}
          </div>
        );
      })}
    </div>
  );
};
