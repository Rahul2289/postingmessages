import React from "react";

//Displaying gifts with a limit 10 with axios and Graphy Api
//Sending Id from children to parent i.e, from GiftList To App with setID function
const GiftList = ({ data, setId, style }) => {
  return (
    <div className="gift-container1">
      {data.map((gift) => {
        return (
          <div key={gift.id} className={style ? "none" : "block"}>
            <img
              onClick={() => {
                setId(gift.id);
              }}
              src={gift.images.fixed_width.url}
              alt={gift.title}
              className="gif-img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default GiftList;
