var maxalumnos = 10;
var contador = 0;

do{
    contador++;
    var alumno = prompt("Porfavor ingrese el nombre del alumno!");
    document.write(alumno + "<br>");
    var nuevoalumno = confirm("Desea ingresar otro alumno??")
}while((nuevoalumno == true) && (contador <= maxalumnos));