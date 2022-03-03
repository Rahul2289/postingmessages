import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const List = ({ message }) => {
  return (
    <div className="message-container">
      {message.map((item, i) => {
        return (
          <div key={i} className="box">
            <div className="profile">
              <AccountCircleIcon fontSize="large" />
              <h3 className="profile-name">Rahul</h3>
            </div>
            <h3>{item}</h3>
          </div>
        );
      })}
    </div>
  );
};
