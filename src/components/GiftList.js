import React from "react";

const GiftList = ({ data, style }) => {
  return (
    <div>
      {data.map((gift) => {
        return (
          <div key={gift.id} className={style ? "none" : "block"}>
            <img src={gift.images.fixed_width.url} alt={gift.title} />
          </div>
        );
      })}
    </div>
  );
};

export default GiftList;
