import React from "react";
import { Servicio } from "./Servicio";

import "./style.css";

export const Servicios = () => {
  return (
    <>
      <div className="row d-flex h-100 justify-content-center gap-0 gap-lg-5">
        <Servicio
          img={
            "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622564/modulomocc/home/icon_curse.png"
          }
          text={"CURSOS GENERALES"}
        />
        <Servicio
          img={
            "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622568/modulomocc/home/icon-curseM.png"
          }
          text={"CURSOS PERSONALIZADOS"}
        />
        <Servicio
          img={
            "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622568/modulomocc/home/icon-pay.png"
          }
          text={"EMISIÓN DE CERTIFICADO"}
        />
      </div>
    </>
  );
};
