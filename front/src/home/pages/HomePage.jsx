import React from "react";

import { Slider } from "../components/slider/Slider";
import { Servicios } from "../components/inicio/Servicios";
import "./style.css";
import Footer from "../components/footer/Footer";
import Linea from "../components/inicio/Linea";
import CursoGeneral from "../components/inicio/CursoGeneral";
import CardInfo from "../components/inicio/CardInfo";

export const HomePage = () => {
  return (
    <>
      <Slider />
      <section className="container-fluid servicios">
        <Servicios />
      </section>
      <div className="container">
        <h1 className="text-center mt-5 title-curso text-black">
          CURSOS GENERALES
        </h1>
        <Linea />
        <div class="row gx-0 d-flex justify-content-center gx-3 mb-5">
          <CursoGeneral
            title={"Contabilidad Básica"}
            img={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622578/modulomocc/home/ini1.jpg"
            }
            icon={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622479/modulomocc/home/5.png"
            }
          />

          <CursoGeneral
            title={"Marketing Digital Básico"}
            img={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622580/modulomocc/home/ini2.jpg"
            }
            icon={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622478/modulomocc/home/6.png"
            }
          />

          <CursoGeneral
            title={"Auxiliar\nContable"}
            img={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622585/modulomocc/home/ini3.jpg"
            }
            icon={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622478/modulomocc/home/7.png"
            }
          />

          <CursoGeneral
            title={"Conoce todos nuestros cursos"}
            img={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622586/modulomocc/home/ini4.jpg"
            }
            icon={
              "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622479/modulomocc/home/8.png"
            }
          />
        </div>
      </div>

      <div class="container mb-5">
        <Linea />
        <div class="row  card2 p-3  ">
          <div class="col-12  text-center title-curso text-black">
            <p>INFORMACIÓN DE NUESTROS CURSOS</p>
          </div>

          <div class="col-12  text-center  text-body titleC  text-black">
            <p>PROWESS OFRECE CURSOS DE CAPACITACIÓN EN LAS SIGUENTES AREAS.</p>
          </div>

          <div class="col-12 col-md-4">
            <div>
              <img
                className="img-fluid img3 "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622553/modulomocc/home/9.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div>
              <img
                className="img-fluid img3 "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622553/modulomocc/home/10.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div>
              <img
                className="img-fluid img3 "
                src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622553/modulomocc/home/11.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div>
          <Linea />
          <div class="row card1 p-3 title-white">
            <CardInfo
              title={"Administracíon"}
              img={
                "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622478/modulomocc/home/01.png"
              }
              text={
                "Desarrollar bases sólidas para la implementación de un negocio,a través de estrategias financieras y administrativas, generando negocios rentables."
              }
            />

            <CardInfo
              title={"Creación de páginas web"}
              img={
                "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622558/modulomocc/home/i4.png"
              }
              text={`Brindar capacitaciones y bases a las personas para la creación
                de páginas web y blogs con la ayuda de la herramienta de
                WordPress la cual facilita la creación del contenido y manejo
                del mismo.`}
            />

            <CardInfo
              title={"Marketing digital"}
              img={
                "https://res.cloudinary.com/dena7lqj3/image/upload/v1670622562/modulomocc/home/i5.png"
              }
              text={`Formar emprendedores con conocimientos y destrezas destinadas al
                cumplimiento de sus objetivos empresariales dentro de un
                ambiente de mercadeo digital.`}
            />
          </div>
          <p className="text-center mt-5 title-curso   text-black">
            CERTIFICADOS DE CALIDAD
          </p>
          <div class="row card1 p-3 d-flex justify-content-center align-items-center mb-5">
            <div class="col-12 col-lg-6 text-center text-white">
              <div className="title-curso text-white ">
                <h1>¿POR QUÉ ESTUDIAR CON NOSOSTROS?</h1>
              </div>
              <p className="text-white text-center titleC">
                Te ofrecemos cursos con tutores capacitados, y certificados
                avalados por la universidad de las fuerzas armadas "ESPE"
              </p>
            </div>

            <div class="row col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div class="col-12 col-md-6 p-1">
                <div className="">
                  <img
                    className="img-fluid"
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622601/modulomocc/home/16.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-12 col-md-6 p-1">
                <div className="">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622565/modulomocc/home/15.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-12 col-md-6 p-1">
                <div className="">
                  <img
                    className="img-fluid "
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622590/modulomocc/home/17.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-12 col-md-6 p-1">
                <div className="">
                  <img
                    className="img-fluid"
                    src="https://res.cloudinary.com/dena7lqj3/image/upload/v1670622553/modulomocc/home/11.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
