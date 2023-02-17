import React from "react";

const CardInfo = ({ title, img, text }) => {
  return (
    <div class="col ">
      <div class="col text-center titleC  title-white">
        <p>{title}</p>
        <div class="card_cert">
          <img className="img-fluid " src={img} alt="" />
        </div>
        <p></p>
      </div>
      <h5>{text}</h5>
    </div>
  );
};

export default CardInfo;
