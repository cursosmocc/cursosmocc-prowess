export const formValidations = {
  email: {
    required: "Este campo es obligatorio",
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: "El correo debe tener un formato valido: ejemplo@gmail.com",
    },
  },
  password: {
    required: "Este campo es obligatorio",
    pattern: {
      value:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%.?&])[A-Za-z\d@$!%.?&]{8,}$/,
      message:
        "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un carácter especial y un mínimo de 8 caracteres",
    },
  },
  password2: { required: "Este campo es requerido" },
  firstname: {
    required: "Este campo es requerido",
    minLength: { value: 3, message: "Coloca un Nomber válido." },
  },
  lastname: {
    required: "Este campo es requerido",
    minLength: { value: 3, message: "Coloca un Apellido válido." },
  },
  username: {
    required: "Este campo es requerido",
    minLength: { value: 3, message: "Coloca un Nombre de Usuario válido." },
  },
  address: { required: "Este campo es requerido", minLength: 6 },
  idnumber: { required: "Este campo es requerido" },
  phone1: {
    required: "Este campo es requerido",
    pattern: {
      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{4,6}$/,
      message: "Coloca un número de teléfono válido.",
    },
  },
  country: { required: "Este campo es requerido" },
  state: { required: "Este campo es requerido" },
  city: { required: "Este campo es requerido" },
  age: { required: "Este campo es requerido" },
  course: { required: "Este campo es requerido" },
  socialmedia: { required: "Este campo es requerido" },
  gender: { required: "Este campo es requerido" },
  terms: { required: "Este campo es requerido" },
};

export const validarCedula = (cedula) => {
  if (cedula.length !== 10) {
    return false;
  }

  if (!/^\d+$/.test(cedula)) {
    return false;
  }

  const verificador = parseInt(cedula.charAt(9));
  let suma = 0;
  for (let i = 0; i < 9; i++) {
    let digito = parseInt(cedula.charAt(i));
    if (i % 2 === 0) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }
    suma += digito;
  }
  const resultado = 10 - (suma % 10);
  if ((resultado === 10 && verificador !== 0) || resultado !== verificador) {
    return false;
  }

  return true;
};
