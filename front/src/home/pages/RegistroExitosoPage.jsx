import './style.css';
const RegistroExitosoPage = () => {
  return (
    <div className="registro-exitoso-container">
      <img className="checkmark-icon" src={"https://res.cloudinary.com/dena7lqj3/image/upload/v1678143989/modulomocc/home/RegistroExitoso2_wungok.png"} alt="Ícono de marca de verificación" />
      <h1 className="titulo-registro-exitoso">¡Registro exitoso!</h1>
      <p className="texto-registro-exitoso">Gracias por registrarte en nuestro sitio.</p>
      <p className="texto-registro-exitoso">Por favor. Confirma tu correo electrónico.</p>
    </div>
  );
};

export default RegistroExitosoPage;

