export const formValidations = {

    nombre: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    email: [(value) => value.includes('@'), 'Este campo es obligatorio '],
    telefono: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    mensaje: [(value) => value.length >= 1, 'Este campo es obligatorio']
}