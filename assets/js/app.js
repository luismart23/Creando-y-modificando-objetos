// Desafío opcional - Creando y modificando objetos

// 1. Crear una función constructora para cada objeto.
// 2. Implementar métodos getters y setters para poder acceder y modificar los datos de
// los pacientes.
// 3.Crear un método mediante la propiedad prototype que permita buscar los datos de
// los usuarios por nombre y otro método que permita mostrar todos los datos de los
// usuarios registrados.
// 4. Instanciar cada objeto utilizando la instrucción new.

class Paciente {
    #nombre;
    #edad;
    #rut;
    #diagnostico;

    constructor(nombre, edad, rut, diagnostico) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#rut = rut;
        this.#diagnostico = diagnostico;
    }

    // Getters y setters para los campos privados
    get nombre() {
        return this.#nombre;
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get edad() {
        return this.#edad;
    }
    set edad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }

    get rut() {
        return this.#rut;
    }
    set rut(nuevoRut) {
        this.#rut = nuevoRut;
    }

    get diagnostico() {
        return this.#diagnostico;
    }
    set diagnostico(nuevoDiagnostico) {
        this.#diagnostico = nuevoDiagnostico;
    }
}

class Consultorio {
    #nombre;
    #pacientes;

    constructor(nombre, pacientes) {
        this.#nombre = nombre;
        this.#pacientes = pacientes;
    }

    buscarDatosDelPaciente(nombre) {
        return this.#pacientes.find(paciente => paciente.nombre === nombre);
    }
}

// Instancia de pacientes
const paciente1 = new Paciente("Fernando Sanchez", 33, "17.654.456-7", "Enfermedad de Kawasaki");
const paciente2 = new Paciente("Pedro Fernandez", 45, "14.754.456-8", "Hipoglucemia");
const paciente3 = new Paciente("Gabriela Catalán", 19, "22.854.756-5", "Intoxicación accidental por fármacos contacto inicia");
const paciente4 = new Paciente("Catalina Pedraza", 26, "20.154.456-0", "Laringitis aguda");
const paciente5 = new Paciente("Felipe Suazo", 55, "9.154.456-0", "Pancreatitis");

// console.log(paciente1, paciente2, paciente3, paciente4, paciente5)

// Instancia de consultorio
const consultorio = new Consultorio("Datos del Paciente", [paciente1, paciente2, paciente3, paciente4, paciente5]);
console.log(consultorio)

// Buscar datos del paciente por su nombre usando find
const pacienteEncontrado = consultorio.buscarDatosDelPaciente("Felipe Suazo");
console.log(pacienteEncontrado, "Usando el metodo find");
