import React from "react";
import ButtonOptionMenu from "./ButtonOptionMenu";
import "./style.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="sec aboutUs">
            <h2>ACERCA DE NOSOTROS</h2>
            <p>
            Módulos cursos MOOC ofrece cursos en línea, abiertos y gratuitos a los emprendedores y 
            usuarios en general, que tienen como objetivo compartir y difundir conocimiento a partir de los material
            realizado por docentes especializado de la Universidad de las Fuerzas Armadas ESPE.
            </p>
            <ul className="sci">
              <li>
                <a
                  href="https://prowessec.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="globe-outline"></ion-icon>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/prowess.ec"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ProwessEc"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/prowess_ec?igshid=YmMyMTA2M2Y="
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@totalprowess_ec?_t=8WfSUUREkkf&_r=1"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="icon">
                    <ion-icon name="logo-tiktok"></ion-icon>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sec quickLinks">
            <h2>ENLACES ÚTILES</h2>
            <ul>
              <ButtonOptionMenu name="Acerca" href="" />
              <ButtonOptionMenu name="FAQ" href="" />
              <ButtonOptionMenu name="Privacidad" href="" />
              <ButtonOptionMenu name="Ayuda" href="" />
              <ButtonOptionMenu name="Términos y Condiciones" href="/terminos" />
            </ul>
          </div>

          <div className="sec contactFooter">
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <ul className="info">
              <ButtonOptionMenu
                href=""
                icon={
                  <span className="icon">
                    <ion-icon name="navigate-circle-sharp"></ion-icon>
                  </span>
                }
                name="Ing. Luis Enrique Simbaña Ph.D"
              />
              <li>
                <span>
                  <ion-icon name="call-sharp"></ion-icon>
                </span>
                <p> WHATSAPP: <br></br>
                  <a href="tel:098 160 2933">(Click aquí ) Para envíarnos un mensaje de WhatsApp +593 98 160 2933
                  </a>
                  <br />
                  <a href="tel:(02) 356 4427">(02) 356 4427</a>
                </p>
              </li>
              <li>
                <span>
                  <ion-icon name="mail-sharp"></ion-icon>
                </span>
                <p> CORREO: <br></br>
                  <a href="mailto:prowesscursosmooc@gmail.com">
                  (Clik aquí ) Para envíarnos un mensaje de correo a prowesscursosmooc@gmail.com
                  </a>
                  <br></br>
                  <a href="mailto:lesimbania@espe.edu.ec">
                  (Clik aquí ) Para envíarnos un mensaje de correo a lesimbania@espe.edu.ec
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrighText">
        <p>Copyright 2023 Prowessec. Todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
