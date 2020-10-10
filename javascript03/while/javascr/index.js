/*var dato = prompt("ingrese un valor");
document.write("<table><thead><tr><th> valor </th></tr></thead>");
document.write("<tbody><tr><td>");
document.write(dato);
document.write("</td></tr></tbody>");
document.write("</table>")*/
var ingresar = confirm("Desea ingresar a un alumno?");
while (ingresar == true) {
    var nombre = prompt("Ingrese el nombre del alumno:")
    document.write(nombre + "</br>")
    ingresar = confirm("Desea ingresar a un alumno?");
}