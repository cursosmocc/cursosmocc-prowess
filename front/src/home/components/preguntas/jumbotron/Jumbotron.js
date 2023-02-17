import React from "react";

import raya from "../imgs/raya.png";

//<link rel="stylesheet" href="style.css">
import "./style.css";
export const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-5">Preguntas frecuentes</h1>

        <img className="image" src={raya} alt="" width="500" height="50" />

        <h5 className="display-100">REGISTRO-SUSCRIPCIÓN</h5>
        <p>
          ¿Cómo me registro en Prowess?
          <br />
          ¿Cómo puedo actualizar los datos de mi registro?
          <br />
          <br />
          <h5 className="display-100">NUNCA HE PEDIDO EN LÍNEA</h5>
          ¿Es posible hacer una reserva por teléfono?
          <br />
          <br />
          <h5 className="display-100">COMPRAS</h5>
          ¿Cómo compro en la Tienda Virtual Prowess?
          <br />
          ¿Se pueden realizar compras desde el extranjero?
          <br />
          ¿Puedo enviar mis compras a otras personas?
          <br />
          <br /> <h5 className="display-100">COSTOS Y TIEMPOS DE ENTREGA</h5>
          ¿En cuánto tiempo llegará mi pedido?
          <br />
          ¿Cuál es el costo de envío que aplica por tipo de producto?
          <br />
          ¿Cómo es calculado el valor de envío a domicilio de tus productos?
          <br />
          <br />
          <h5 className="display-100">FORMAS DE PAGO</h5>
          ¿Cuáles son las formas de pago en la Tienda Virtual?
          <br />
          ¿Recibiré una factura con mi compra?
          <br />
          <br />
          <h5 className="display-100">SEGURIDAD </h5>
          ¿Es seguro comprar en la Tienda Virtual?
          <br />
          ¿Cómo puedo bloquear mi cuenta de usuario?
          <br />
          ¿Cómo puedo cambiar mi contraseña?
          <br />
          ¿Cómo puedo recuperar mi contraseña?
          <br />
          <br />
          <h5 className="display-100">ESTADO DE PEDIDO</h5>
          ¿Cómo consulto el estado de mi pedido?
          <br />
          ¿Cuáles son los estados de mi compra?
          <br />
          <br />
          <h5 className="display-100">RETIRO EN TIENDA</h5>
          ¿Puedo retirar mi pedido en tienda?
          <br />
          <br />
          <h5 className="display-100">RETIRO EN AGENCIAS AUTORIZADAS </h5>
          ¿Es posible retirar mi pedido en una agencia autorizada?
          <br />
          <br />
          <h5 className="display-8">CAMBIOS Y DEVOLUCIONES </h5>
          ¿Cómo realizo cambios y devoluciones en la tienda virtual?
          <br />
        </p>

        <p></p>
      </div>
    </div>
  );
  //fin de retun
};

//animacion del boton de menu de opciones desplegable
const opcion = document.querySelectorAll(".opcion");

// Permite recorrer cada una de nuestras opciones
opcion.forEach((e) => {
  // Añadimos un evento a cada elemento seleccionado
  e.addEventListener("click", function (e) {
    // Alteranmos las clases de nuestros enlaces
    const padre = e.target.parentNode;
    padre.children[1].classList.toggle("animation");
    padre.parentNode.children[1].classList.toggle("animation");
  });
});
/**        <div class="cont-menu">
          <div class="cont-enlace">
            <div class="opcion">
              <p>Opcion 1</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <p>Opcion</p>
              <a href="#">enlase1</a>
            </div>
          </div>

          <div class="cont-enlace">
            <div class="opcion">
              <p>OPCIOPN2</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <a href="#">enlase</a>
            </div>
          </div>

          <div class="cont-enlace">
            <div class="opcion">
              <p>OPCIOPN3</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <a href="#">enlase</a>
            </div>
          </div>

          <div class="cont-enlace">
            <div class="opcion">
              <p>OPCIOPN4</p>
              <p class="icono">+</p>
            </div>
            <div class="enlace">
              <a href="#">enlase</a>
            </div>
          </div>
        </div>
 */

export default Jumbotron;
