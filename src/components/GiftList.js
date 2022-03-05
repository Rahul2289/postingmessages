import React from "react";

const GiftList = ({ data, setId, style }) => {
  return (
    <div className="gift-container1">
      {data.map((gift) => {
        return (
          <div key={gift.id}>
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
