import React from "react";
import { Jumbotron } from "./jumbotron/Jumbotron";
import { Detalles } from "./detalles/Detalles";
import Footer from "../footer/Footer"

export const Nosotros = () => {
  return (
    <>
      <main role="main" className="container-fluid">

        <div className="container">
          <div className="separacion"></div>
          <div className="row align-items-start pt-3">
            <div className="col-12 col-lg-7">
              <Jumbotron />
            </div>
            <div className="col-12 col-lg-5">
              <Detalles />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default Nosotros

