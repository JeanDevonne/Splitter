x = prompt("Ingresar valores separados por comas.","");
function llenar(){
	var	V = x.split(",");
	for (var C = 0; C < V.length; C++) {
		document.write("Elemento: ");
		document.write(V[C]);
		document.write("<br/>");
	}
}