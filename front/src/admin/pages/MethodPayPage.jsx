import React from "react";
import MethodPay from "../components/pagos/MethodPay";
import imagePago from '../../assets/images/imagePago.jpg'
import './style.css'

const MethodPayPage = () => {
  return (
    <div className={`p-4 my-container`}>
      <div className="img-pago">
        <img src={imagePago} alt="pago" />
      </div>
      <MethodPay />
    </div>
  );
};

export default MethodPayPage;
