import React from "react";

import { Jumbotron } from "./jumbotron/Jumbotron";
import { Detalles } from "./detalles/Detalles";
import Footer from "../footer/Footer"

export const Preguntas = () => {
  return (
    <>
      <main role="main" className="flex-shrink-0 mt-5">

        <div className="container-xl">
          <div className="row align-items-start">
            <div className="col">
              <Jumbotron />
            </div>
            <div className="col">
              <Detalles />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default Preguntas

