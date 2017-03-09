var estudiantes = [];

function obtenerListaEstudiantes(agregarEstudiante) {
    // TO DO: Retornar la lista de estudiantes
var lista =[];
lista.push(estudiantes);

return lista;
console.log(lista);
}

function agregarEstudiante(nombre,porcentajeTecnico,porcentajeHSE) {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
      estudiantes={
       nombre : prompt("Nombre de la alumna"),
       porcentajeTecnico : parseInt(prompt("Porcentaje Técnico")),
       porcentajeHSE : parseInt(prompt("Porcentaje Habilidades Socio-Emocionales")),
     };
  
return estudiantes;

}


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiantes.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes.porcentajeHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(obtenerListaEstudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
var listaCompleta =[];
return listaCompleta += mostrar();
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
